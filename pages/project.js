import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Head from 'next/head'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Error from 'next/error';
import SimpleForm from '../components/simpleForm';
import Hidden from '@material-ui/core/Hidden';
import SolutionArrow from '../static/solution-arrow.svg';



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import 'isomorphic-fetch'
const fetchUrl = process.env.fetchUrl;


const styles = theme => ( {
root:{
display: 'flex',
alignItems: 'center',
flexGrow: 1,
transition: 'all .5s cubic-bezier(.02, .01, .47, 1)'
},
content: {
width: '100%',
position: 'relative',
height: '100%',
},
spacer: {
width: 'calc(100% + 16px)',
margin: '-8px',
height: 'auto',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
paddingTop:'100px',
paddingBottom:'100px',
},
process:{
paddingBottom: '10vh',
paddingTop: '10vh',
height:'auto',
display:'flex',
alignItems:'center'
},
verticalLine:{
display:'flex',
justifyContent:'center',
width:'2px',
height:'100%',
background:'#dadada'
},
spacerNextProject:{
width: 'calc(100% + 16px)',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
},
projectLegend: {
display:'inline-block',
},
contentCenter:{
display: 'flex',
alignItems: 'center',
textAlign:'left',
paddingBottom: '50px',
paddingTop: '50px',
justifyContent: 'flex-start',
},
});

class Project extends React.Component {
constructor(props) {
super(props);
this.state = {
/* initial state */
dialogOpen: false,
backgroundColor: this.props.project.project_theme_color,
};
}

//fetch detailsthe project here
static async getInitialProps(nextProps){


let path = nextProps.asPath
path = path.substr(9);

const url = 'https://' + fetchUrl + '/wp-json/wp/v2/projects?slug=' + path;
const res = await fetch(url)
const project = await res.json()

const url2 = 'https://' + fetchUrl + '/wp-json/wp/v2/projects';
const res2 = await fetch(url2)
const moreProjects = await res2.json()
if (( !("password" in nextProps.query) && project[0].acf.password === '')
||
(nextProps.query.password === project[0].acf.password)
){
//fetch more projects to display at the end

return{
currProject: project[0].slug,
project: project[0].acf,
fetching: false,
bgColor: project[0].acf.project_theme_color,
moreProjects: moreProjects,
projectPassword: project[0].acf.password,
}
}

return {
error: true,
projectPassword: project[0].acf.password,
currProject: project[0].slug,
project: project[0].acf,
fetching: false,
bgColor: project[0].acf.project_theme_color,
moreProjects: moreProjects,
projectPassword: project[0].acf.password,
}
}

openDialog = () => {
this.state.dialogOpen ? null :
this.setState({
dialogOpen: true,
})
}

handleClose = () => {
this.setState({ dialogOpen: false });
}

setPassword = event => {
this.setState({
inputPassword: event.target.value
})
}

verifyPassword = () =>{
if (this.state.inputPassword == this.props.projectPassword){

Router.push({
pathname: '/project',
query: {
password: this.state.inputPassword,
},
},
`/project?${this.props.currProject}`).then(() => window.scrollTo(0, 0));
}
else{

this.setState({
errorMessage: 'The password you attempted is incorrect. Please request access below and we will get back to you shortly.'
})
}
}

componentDidMount(){

this.props.error ? this.openDialog() : null

}

handleClick() {
Router.push({
pathname: '/work',
})
}

render() {
const { classes } = this.props;
if (this.props.error){

return(
<div>
  <Error statusCode={403} />
  <Dialog open={this.state.dialogOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Top Secret Project</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Please provide a passsword to view this project.
        <br /><span style={{color: 'red'}}>
          {this.state.errorMessage}
        </span>
      </DialogContentText>
      <TextField autoFocus margin="dense" id="password" label="Password" type="password" onChange={this.setPassword} />
    </DialogContent>
    <DialogActions>
      <Button href="/work" disableRipple={true} style={{position:'relative', left:'-65px', minHeight: '0px', display: 'inline-flex', justifyContent:'flex-start'}}>
        <Icon style={{verticalAlign:'middle'}}>chevron_left</Icon>
        <Typography className={"underline"} variant="button" color="inherit">
          Back
        </Typography>
      </Button>
      <SimpleForm title='Request Access' />
      <Button style={{marginLeft:'20px', marginRight:'20px'}} onClick={this.verifyPassword} disableRipple={true} className={"underline"}>
        <Typography variant="button" color="inherit">
          Submit
        </Typography>
      </Button>
    </DialogActions>
  </Dialog>


</div>
)
}


return (
<div className={classes.root} style={{position: 'relative'}}>
<div>

  <Head>
    <title>Academy – {this.props.project.client_name + " – " + this.props.project.project_title}</title>
    <meta name="description" content={this.props.project.project_description} />
  </Head>

  <Grid container className="project" style={{height:'100%', position:'relative', transition:'1s all'}}>
    <Grid item xs={1} md={1} lg={2} xl={3}></Grid>
    <Grid item xs={10} md={10} lg={8} xl={6}>
      <Grid container>
        <Grid item xs={12} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={12} md={8} lg={8} xl={8} style={{padding: '12rem 0rem 4rem 0rem'}}>
          <div className={classes.projectLegend} style={{padding: '0rem 0rem 1rem 0rem'}}>
            <Typography variant="title" style={{opacity:'.5', fontSize:'.8rem', color: this.props.project.project_font_color}} className={classes.projectLegend}>
              Client&nbsp;
            </Typography>
            <Typography variant="title" className={classes.projectLegend} style={{color: this.props.project.project_font_color, fontSize:'.8rem',}}>
              {this.props.project.client_name}
            </Typography>
          </div>
          <div className={classes.subLegend}>
            <Typography variant="display2" style={{color: this.props.project.project_font_color}}>
              {this.props.project.project_title}
            </Typography>
          </div>

        </Grid>
      </Grid>
  </Grid>

    <Grid container style={{paddingBottom:'4rem'}}>
      <Grid item xs={1} md={1} lg={1} xl={2}></Grid>
      <Grid item xs={10} md={10} lg={10} xl={8}>
        <img width="100%" style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}} src={this.props.project.featured_image} />
      </Grid>
      <Grid item xs={1} md={1} lg={1} xl={2}></Grid>
    </Grid>
  </Grid>



  <Grid container className={classes.content}>
    <Grid item xs={12}>

  {/* Introduction */}
  <Grid container style={{paddingBottom:'4rem'}}>
    <Grid item xs={1} md={1} lg={2} xl={3}></Grid>
    <Grid item xs={10} md={10} lg={8} xl={6}>

    <Grid container>
      <Grid item xs={12} md={4} lg={4} xl={4}>
        <Typography variant="title" style={{fontSize:'.8rem', paddingBottom:'2rem', opacity: 0.5, color: "rgb(10, 10, 10)"}}>Introduction</Typography>
      </Grid>

      <Grid item xs={12} md={8} lg={8} xl={8}>
        <Typography variant="display4" style={{fontSize:'calc(1.3em + .25vw)', paddingBottom:'2rem'}} gutterBottom paragraph>
          {this.props.project.project_description}
        </Typography>
      </Grid>

    </Grid>

          {this.props.project.link == '' ? null :
          <Grid container style={{paddingBottom:'4rem'}}>
            <Grid item xs={12} md={4} lg={4} xl={4}></Grid>
            <Grid item xs={12} md={8} lg={8} xl={8}>

            <Typography variant="button" paragraph>
              <a href={this.props.project.link} target="_blank" rel="noopener" className="underline" style={{textDecoration: 'none', color:'black'}}>
                Visit Site <Icon style={{fontSize:'14px', verticalAlign: 'middle'}}>chevron_right</Icon>
              </a></Typography>
            </Grid>
          </Grid>
          }

        {this.props.project.project_kpis == '' ? null :
              <Grid container>
              <Grid container style={{paddingBottom:'2rem'}}>
                <Grid item xs={12} md={4} lg={4} xl={4}></Grid>

                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                  <Grid container>
                    <Grid item xs={12} sm={5} md={5} lg={5} xl={5} style={{paddingBottom:'2rem'}}>
                      <Typography variant="title" style={{fontSize:'1rem'}} gutterBottom paragraph>
                        KPIs
                      </Typography>
                      <Typography variant="body1" gutterBottom paragraph>
                        <div dangerouslySetInnerHTML={{__html: this.props.project.project_kpis}} />
                      </Typography>
                    </Grid>
                    <Grid item xs={1} md={2} lg={2} xl={2}></Grid>

                    <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
                      <Typography variant="title" style={{fontSize:'1rem'}} gutterBottom paragraph>
                        Tasks
                      </Typography>
                      <Typography variant="body1" gutterBottom paragraph>
                          <div dangerouslySetInnerHTML={{__html: this.props.project.project_tasks}} />
                      </Typography>
                    </Grid>
                  </Grid>

                </Grid>

              </Grid>

              <Grid container style={{paddingBottom:'4rem'}}>

                <Grid item xs={12} md={4} lg={4} xl={4}></Grid>

                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                  <hr className="divider" style={{marginTop:'1rem', marginBottom:'4rem'}}></hr>
                  <Grid container>
                    <Grid item xs={12} md={12} lg={12}>
                      <Typography variant="title" style={{fontSize:'1rem'}} gutterBottom paragraph>
                        Goals
                      </Typography>
                      <Typography variant="body1" gutterBottom paragraph>
                        {this.props.project.project_goals}
                      </Typography>
                    </Grid>
                    <Grid item xs={1} md={1}></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
    }
    </Grid>
    </Grid>


{/* Quotes */}

{this.props.project.quote_1 == '' ? null :


  <Grid container style={{paddingBottom:'6rem'}}>

    <Grid container>

      <Grid item xs={12} className="divider"></Grid>

    </Grid>

    <Grid item xs={12} style={{paddingBottom:'8rem', paddingTop:'8rem'}}>

      <Grid container spacing={8} id="quotes" style={{display:'flex', justifyContent:'center'}}>
        <Grid item xs={10} md={8}>
            <Typography variant="display4" style={{paddingBottom:'2rem', textAlign:'center'}}>{this.props.project.quote_1}</Typography>
            <Typography variant="headline" style={{paddingBottom:'2rem', textAlign:'center'}}>―{this.props.project.quote_1_author}</Typography>
        </Grid>
      </Grid>
      </Grid>

      <Grid container>

        <Grid item xs={12} className="divider"></Grid>

      </Grid>
  </Grid>
}




  {/* Problem */}

    <Grid container style={{paddingBottom:'5rem'}}>
      <Grid item xs={1} md={1} lg={2} xl={3}></Grid>
      <Grid item xs={10} md={10} lg={8} xl={6}>

        <Grid container>
          <Grid item xs={12} md={4} lg={4} xl={4}>
            <Typography variant="title" style={{fontSize:'.8rem', paddingBottom:'2rem', opacity: 0.5, color: "rgb(10, 10, 10)"}}>Problem</Typography>
          </Grid>
          <Grid item xs={12} md={8} lg={8} xl={8}>
            <Typography variant="display4" style={{fontSize:'calc(1.3em + .25vw)'}} gutterBottom paragraph>
              {this.props.project.problem_description}
            </Typography>

          </Grid>
        </Grid>



        {this.props.project.key_takeaway_1 !== '' ?
        <Grid container>
          <Grid item xs={12} md={4} lg={4} xl={4}></Grid>
          <Grid item xs={12} md={8} lg={8} xl={8}>

            <hr className="divider" style={{marginBottom:'4rem', marginTop:'4rem'}}></hr>

            <Grid container>
              <Grid item xs={12} md={10} lg={3} xl={3} style={{paddingBottom:'2rem'}}>
                <Typography variant="title" style={{fontSize:'1rem'}} gutterBottom paragraph>
                  {this.props.project.key_takeaway_1_title}
                </Typography>
                <Typography variant="body1" gutterBottom paragraph>
                  {this.props.project.key_takeaway_1}
                </Typography>
              </Grid>
              <Grid item xs={1} md={1}></Grid>

              <Grid item xs={12} md={10} lg={3} xl={3} style={{paddingBottom:'2rem'}}>
                <Typography variant="title" style={{fontSize:'1rem'}} gutterBottom paragraph>
                  {this.props.project.key_takeaway_2_title}
                </Typography>
                <Typography variant="body1" gutterBottom paragraph>
                  {this.props.project.key_takeaway_2}
                </Typography>
              </Grid>
              <Grid item xs={1} md={1}></Grid>
              <Grid item xs={12} md={10} lg={3} xl={3} style={{paddingBottom:'2rem'}}>
                <Typography variant="title" style={{fontSize:'1rem'}} gutterBottom paragraph>
                  {this.props.project.key_takeaway_3_title}
                </Typography>
                <Typography variant="body1" gutterBottom paragraph>
                  {this.props.project.key_takeaway_3}
                </Typography>
              </Grid>
            </Grid>

          </Grid>

        </Grid> : null
      }

    </Grid>
    </Grid>

    {/* Problem Gallery */}

    {this.props.project.problem_image_1 !== '' ?
         <Grid container style={{paddingBottom:'6rem'}}>
           <Grid item xs={1} md={2}></Grid>
           <Grid item xs={10} md={8}>
             <img width="100%" style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}} src={this.props.project.problem_image_1} />
           </Grid>
           <Grid item xs={1} md={2}></Grid>
         </Grid> : null
    }

    {/* Process */}

        <Grid container>
          <Grid item xs={1} md={1} lg={2} xl={3}></Grid>
          <Grid item xs={10} md={10} lg={8} xl={6}>

            <Grid container style={{paddingBottom:'5rem'}}>
              <Grid item xs={12} md={4} lg={4} xl={4}>
                <Typography variant="title" style={{fontSize:'.8rem', opacity: 0.5, color: "rgb(10, 10, 10)"}}>Process</Typography>
              </Grid>
              <Grid item xs={12} md={8} lg={8} xl={8}></Grid>
            </Grid>

          </Grid>
          <Grid item xs={1} md={2}></Grid>
        </Grid>

        <Grid container>
          <Grid item xs={1} md={1} lg={2} xl={3}></Grid>
          <Grid item xs={10} md={10} lg={8} xl={6}>
            <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={4} style={{paddingBottom:'6rem'}}>
              <div style={{height: '520px', maxHeight:'550px', background:'white', padding:'2rem', border: '1px #ededed solid'}}>
              <div style={{height: '200px'}}>
              <Typography variant="title" style={{fontSize:'.8rem'}} color="inherit" gutterBottom paragraph>01</Typography>
              <Typography variant="title" style={{fontSize:'1rem'}} color="inherit" gutterBottom paragraph>Research & Strategy</Typography>
              <Typography variant="body1" color="inherit" gutterBottom>Our team embeds alongside yours to help define the strategic vision, conduct research and learn how to drive business value while building products users love.</Typography>
              </div>
              <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Ethnographic Research</Typography>
              <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Quantative Analysis</Typography>
              <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Stakeholder Interviews</Typography>
              <Typography style={{paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Persona Identification</Typography>
              <hr className={"divider"} style={{borderColor:'black', borderBottomWidth:"1px"}}></hr>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={4} style={{paddingBottom:'6rem'}}>
              <div style={{height: '520px', maxHeight:'550px', background:'white', padding:'2rem', border: '1px #ededed solid'}}>
              <div style={{height: '200px'}}>
              <Typography variant="title" style={{fontSize:'.8rem'}} color="inherit" gutterBottom paragraph>02</Typography>
              <Typography variant="title" style={{fontSize:'1rem'}} color="inherit" gutterBottom paragraph>Design Sprints</Typography>
              <Typography variant="body1" color="inherit" gutterBottom>We run a 5 day concept driven Design Sprint that uses Design Thinking in cross-functional teams to design, prototype, and test solutions with users.</Typography>
              </div>
              <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Design Thinking</Typography>
              <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>User Journey Maps</Typography>
              <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Concept Validation</Typography>
              <Typography style={{paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Feature Roadmap</Typography>
              <hr className={"divider"} style={{borderColor:'black', borderBottomWidth:"1px"}}></hr>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={4} style={{paddingBottom:"2em"}}>
              <div style={{height: '520px', maxHeight:'550px', background:'white', padding:'2rem', border: '1px #ededed solid'}}>
              <div style={{height: '200px'}}>
              <Typography variant="title" style={{fontSize:'.8rem'}} color="inherit" gutterBottom paragraph>03</Typography>
              <Typography variant="title" style={{fontSize:'1rem'}} color="inherit" gutterBottom paragraph>Detailed Design Sprint</Typography>
              <Typography variant="body1" color="inherit" gutterBottom>We create design language systems to scale and work through complex user journeys to ensure all scenarios are accounted for tested prior to launch.</Typography>
              </div>
              <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Design Language System</Typography>
              <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Usability Testing</Typography>
              <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Interactive Prototype</Typography>
              <Typography style={{paddingBottom:'20px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Detailed User Flows</Typography>
              <hr className={"divider"} style={{borderColor:'black', borderBottomWidth:"1px"}}></hr>
              </div>
            </Grid>
          </Grid>
          </Grid>
        </Grid>

      {/* Process Gallery */}

      {this.props.project.process_image_1 !== '' ?
      <Grid container style={{paddingBottom:'4rem'}}>
        <Grid item xs={1} md={1} lg={1} xl={2}></Grid>
        <Grid container style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
        <Grid item xs={10} md={10} lg={10} xl={8}>
          <img width="100%" src={this.props.project.process_image_1} />
        </Grid>
        <Grid item xs={10} md={10} lg={10} xl={8}>
          <img width="100%" src={this.props.project.process_image_2} />
        </Grid>
        </Grid>
        <Grid item xs={1} md={1} lg={1} xl={2}></Grid>
      </Grid> : null
        }

      {/* Solution */}

      <Grid container>
        <Grid item xs={1} md={1} lg={2} xl={3}></Grid>
        <Grid item xs={10} md={10} lg={8} xl={6}>

          <Grid container style={{paddingTop:'4rem'}}>

            <Grid item xs={12} md={4} lg={4} xl={4}>
              <Typography variant="title" style={{fontSize:'.8rem', paddingBottom:'2rem', color:'rgba(36,39,49,.4)'}}>Solution</Typography>
            </Grid>
            <Grid item xs={12} md={8} lg={8} xl={8}>
              <Typography variant="display4" style={{fontSize:'calc(1.3em + .25vw)'}} gutterBottom paragraph>
                {this.props.project.solution_description}
              </Typography>

            </Grid>
          </Grid>

      {this.props.project.solution_result_1 !== '' ?
      <Grid container>
        <Grid item xs={12} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={12} md={8} lg={8} xl={8}>


              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                <hr className="divider" style={{marginBottom:'4rem', marginTop:'4rem'}}></hr>
                <Grid container>
                <Grid item xs={12} md={10} lg={5} style={{paddingBottom:'2rem'}}>

                  <ul className="solution">
                    <li>
                      <SolutionArrow />
                      <span>
                        <Typography variant="body1" gutterBottom paragraph>
                          <strong>{this.props.project.solution_result_1_title}</strong>{this.props.project.solution_result_1}
                        </Typography>
                      </span>
                    </li>
                  </ul>

                </Grid>

                <Grid item xs={1} md={1}></Grid>

                <Grid item xs={12} md={10} lg={5} style={{paddingBottom:'2rem'}}>
                  <ul className="solution">
                    <li>
                      <SolutionArrow />
                      <span>
                        <Typography variant="body1" gutterBottom paragraph>
                          <strong>{this.props.project.solution_result_2_title}</strong>{this.props.project.solution_result_2}
                        </Typography>
                      </span>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={1} md={1}></Grid>
                <Grid item xs={12} md={10} lg={5} style={{paddingBottom:'2rem'}}>
                  <ul className="solution">
                    <li>
                      <SolutionArrow />
                      <span>
                        <Typography variant="body1" gutterBottom paragraph>
                          <strong>{this.props.project.solution_result_3_title}</strong>{this.props.project.solution_result_3}
                        </Typography>
                      </span>
                    </li>
                  </ul>
                </Grid>
                </Grid>
                </Grid>

              </Grid>


        </Grid>
        <Grid item xs={1} md={2}></Grid>
      </Grid> : null
        }
    </Grid>
    </Grid>


    {/* Solution Gallery */}

    {this.props.project.solution_image_1 == '' ? null :
       <Grid container>
         <Grid item xs={1} md={1} lg={1} xl={1}></Grid>
         <Grid item xs={10} md={10} lg={10} xl={10}>

            {this.props.project.solution_image_1 == '' ? null :
            <Grid container style={{display:'flex', justifyContent:'center', paddingBottom:'6rem', alignItems:'flex-start'}}>
             <Grid item xs={12} md={12}>
               <img width="100%" className="solution-gallery" src={this.props.project.solution_image_1} />
             </Grid>
            </Grid>
            }

             {this.props.project.solution_image_2 == '' ? null :
             <Grid container style={{display:'flex', justifyContent:'space-between', paddingBottom:'6rem', alignItems:'flex-start'}}>
              <Grid item xs={12} md={12} lg={5} xl={5}>
                <img width="100%" className="solution-gallery" src={this.props.project.solution_image_2} />
              </Grid>
              <Grid item xs={12} md={12} lg={1} xl={1} style={{paddingBottom:'6rem'}}></Grid>
              <Grid item xs={12} md={12} lg={5} xl={5}>
                <img width="100%" className="solution-gallery" src={this.props.project.solution_image_3} />
              </Grid>
              </Grid>

             }
            {this.props.project.solution_image_4 == '' ? null :
             <Grid container style={{display:'flex', justifyContent:'center', paddingBottom:'6rem', alignItems:'flex-start'}}>
               <Grid item xs={12} md={12} lg={12} xl={12}>
                 <img width="100%" className="solution-gallery" src={this.props.project.solution_image_4} />
               </Grid>
              </Grid>

              }
             </Grid>

         <Grid item xs={1} md={1}></Grid>
       </Grid>
     }



    {/*Video*/}

    {this.props.project.large_video !== '' ?

    <Grid container style={{background:'white'}}>
      <Grid item xs={12} md={12}>

        <div dangerouslySetInnerHTML={{__html: this.props.project.large_video}} />

      </Grid>
    </Grid> : null
    }

    <Grid container>
      <Grid item xs={12}>
        <hr className={"divider"} style={{marginBottom:'4em', borderColor:'black', borderBottomWidth:".5px"}}></hr>
      </Grid>
    </Grid>

    {/*Next Projects*/}

    <Grid container>
      <Grid item xs={1} md={1} lg={3} xl={3}></Grid>
      <Grid item xs={10} md={10} lg={6} xl={6}>

        <Grid container style={{paddingBottom:'5rem'}}>
          <Grid item xs={12} md={4} lg={4} xl={4}>
            <Typography variant="title" style={{fontSize:'.8rem', paddingBottom:'2rem', color:'rgba(36,39,49,.4)'}} gutterBottom>More Projects</Typography>
          </Grid>
          <Grid item xs={12} md={8} lg={8} xl={8}>
            {this.props.moreProjects.map((project) => {
            if(project.slug != this.props.currProject){
            return(
            <Grid key={project.slug} item xs={12} md={10} lg={10} style={{marginBottom:'20px'}}>
              <a className="link" style={{textDecoration: 'none', color: '#000000'}} href={'/project?' + project.slug}>
                <Typography variant="title" style={{fontSize:'.8rem'}}>{project.acf.client_name}</Typography>
                <Typography variant="headline" style={{fontSize:'1.1rem'}}>{project.acf.project_title}</Typography>
                <hr className="divider" style={{marginTop:'1rem', marginBottom:'1rem'}}></hr>
              </a>
            </Grid>
            )
            }
            })
            }

          </Grid>
        </Grid>

      </Grid>
      <Grid item xs={1} md={2}></Grid>
    </Grid>


  </Grid>
  </Grid>

</div>
</div>

);
}
}

Project.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(withRouter(Project)));
