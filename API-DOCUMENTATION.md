# API DOCUMENTATION


###### Assumptions and Pre-requisites

1. System is structured in a way, described [here](DEPLOYMENT.md#current-system-architecture)
2. WordPress is at or above **4.7**
3. Plugins are setup as described [here](DEPLOYMENT.md#plugin-installation)
4. Understanding [HTTP fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
5. Basic understanding of [React's Component lifecycle methods](https://reactjs.org/docs/react-component.html). Majorly [componentWillMount](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount) and [componentDidMount](https://reactjs.org/docs/react-component.html#componentdidmount)


## Table of Contents

1. Where should I write my `fetch()` calls?
2. Why async/await?
3. fetchUrl in env-config.js and why?
4. Basic WordPress REST API requests/response(#wordpress-rest-api)
5. Test API with Postman
6. Requests specific to a Custom Post Type
    - [Blogs API](#blogs-api)
    - [Projects API](#projects-api)



## Where should I write my `fetch()` calls

### Before page renders?

Write fetch in **componentWillMount**.

As react's documentations says
> componentWillMount() is invoked just before mounting occurs. It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering. 

So, fetch would be done in a way shown below:
> Example below fetches blogs for the first time, which is first 10 blogs from page 1.

```javscript
async UNSAFE_componentWillMount(){
    
    url = 'https://academy-ny.com/wp-json/wp/v2/blogs?page=1'
    let res = await fetch(url)
    let blogs = await res.json()
    
    await this.setState({
      blogs: blogs
    })
  }

```


### After page renders? 

Write fetch in **componentDidMount**.

As react's documentations says

> componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

So, fetch would be done in a way shown below:
> Example below fetches blogs from the page number, from a global variable `currPage`. Won't go much into that, but understand that, this is used to fetch next 10 blogs in our page when scrolling. So **componentDidMount** is a good place to write this kind of logic.

```javscript
async componentDidMount(){
    
    url = 'https://academy-ny.com/wp-json/wp/v2/blogs?page=' + currPage;
    let prevBlogs = this.state.blogs
    await this.setState({
        blogs:  ("code" in blogs ? prevBlogs : prevBlogs.concat(blogs)),
        isLoading: false,
        open: false,
        fetching: false
    })
  }

```



## Why async/await?

> More info can be found for [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)


### About async

As the documentation reads:

> An async function can contain an **await** expression that **pauses the execution of the async function and waits for the passed Promise's resolution**, and then **resumes** the async function's execution and **returns the resolved value**.


### About await

As the documentation reads, **await**, a keyword, is used when one wants to **pause execution of async function until a Promise is fulfilled, and resume execution of the async function after fulfillment**


### How does this help?**

Meanwhile the function is fetching a specified data, we can display a loader component, so that user experience is smoother.

Something like:

```javascript
{
    this.state.fetching ? <loaderComponent/> : < yourComponentRenderCodeInABlock/>
}
```


## fetchUrl in env-config.js and why?

##### To keep domain open to change

We've set this up via a babel-loader plugin and are using something like:

**env-config.js**
```javascript
module.exports = {
    'process.env.fetchUrl': 'admin.academy-ny.com'
}
```

And in our code:

```javascript
const url = 'https://' + fetchUrl + 'wp-json/wp/v2/';
```

This makes our code independent of `fetchUrl` changes, so that we don't have to change this constant on every page. Our pluging does that for us.



## WordPress REST API

> Complete Documentation can be found [here](https://v2.wp-api.org/) on their official Developer Handbook

Now that we've touched most of the key points needed to embed `fetch()` in a `Javascript-y` app. Lets dive into the REST API Strcuture.

##### Assuming the Domain Name for WordPress CMS to be 'academy-ny.com'

Requests can be done via this URL: `https://admin.academy-ny.com/wp-json/wp/v2/`

This is like the base URL.



## Testing API via PostMan

> Get the app from [here](https://www.getpostman.com/)

> #### This is like the go-to way to checkout API responses, before embedding it into apps

After installing, you can test the API endpoint for `blogs` like:

![Shown here](http://cdn1.academy-ny.com/wp-content/uploads/2018/05/14224133/Postman-blogs.png)



## Requests specific to a Custom Post Type

###### Assuming base URL to be `https://admin.academy-ny.com/wp-json/wp/v2/`

### Blogs API

API Request for `blogs` would be

```url
GET /blogs
```

| Attribute     | Type          | Description   |
| :---          | :---          | :---          |
| featured      | String        |  `true` to find featured blog |
| page          | Integer       | `1` will bring 10 latest posts or `2` to fetch from page #2 |
| per_page      | Integer       |  `10` will set the posts per page to 10. |

For additional attributes read [here](https://developer.wordpress.org/rest-api/)

Sample Response structure:

```json
    [
    {
        "id": 19,
        "date": "2018-05-09T22:22:55",
        "date_gmt": "2018-05-09T22:22:55",
        "guid": {
            "rendered": "http://admin.academyv3.tk/?post_type=blogs&#038;p=19"
        },
        "modified": "2018-05-09T22:37:22",
        "modified_gmt": "2018-05-09T22:37:22",
        "slug": "how-ego-gets-in-the-way-of-good-decision-making",
        "status": "publish",
        "type": "blogs",
        "link": "https://admin.academyv3.tk/blogs/how-ego-gets-in-the-way-of-good-decision-making/",
        "title": {
            "rendered": "How Ego Gets in the Way of Good Decision Making"
        },
        "content": {
            "rendered": "<p>Lorem ipsum dolor sit amet, te vix latine platonem elaboraret. Cum ex solet mentitum. Ea sit amet sint illum, case reque cum et. Qui cu debitis efficiantur. Dolor melius qui cu, eu diam interpretaris his.</p>\n<p>Debitis fierent sed te, ex splendide scripserit ius. Mel accusam definitiones eu, mea ea porro delectus voluptatibus. Vim doming qualisque ex, id his diam erant ponderum. Ea oratio invidunt interpretaris eam, adhuc putant appellantur vim in, eam movet hendrerit democritum cu. Alii theophrastus id vis, mei ei quod choro. Mea cu modo aliquando incorrupte, brute sensibus recteque cum te, vim et vidisse laboramus.</p>\n<p>Veri gubergren sit ei, quot iriure recusabo qui id. Has nullam ornatus id, case oportere corrumpit eu quo. Impetus utroque invenire in ius. Usu elit prompta ei, noster viderer sea ad, ei vis delenit mentitum hendrerit. Qui ipsum fugit abhorreant in, eu amet meis habemus sed. Ex dolor affert labore vix, vix scribentur concludaturque ea.</p>\n<p><img class=\"alignnone size-full wp-image-24 my-class\" src=\"http://test-this-domain.tk/wp-content/uploads/2018/03/att-2@3x.jpg\" alt=\"\" /></p>\n<p>Falli scaevola probatus mel te. Nusquam adipisci definiebas mea ex, qui lorem recteque te. Vel reque elitr accusam ut, eam id virtute dolorem, eos at eripuit urbanitas mnesarchum. Posse principes constituto qui at, omnes ceteros ad pri. Est admodum consulatu ad, sit sonet audire no.</p>\n<p>Falli elaboraret nam ea, purto exerci cum eu. Adhuc quaeque ornatus est ei. Ei antiopam similique nec. Id summo discere disputationi vel. Ne tota iisque expetendis eam, mel apeirian partiendo abhorreant ne, iudico reformidans ei nec. Mutat labore mollis no nec, has elit verterem at.</p>\n",
            "protected": false
        },
        "featured_media": 0,
        "template": "",
        "acf": {
            "title": "How Ego Gets in the Way of Good Decision Making",
            "description": "",
            "featured_image": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/09222124/2c632b50335679.58ce07b24102f.jpg",
            "password": "",
            "tags": "",
            "author": {
                "ID": "1",
                "user_firstname": "Adam",
                "user_lastname": "Perlis",
                "nickname": "Adam",
                "user_nicename": "user",
                "display_name": "Adam Perlis",
                "user_email": "user@example.com",
                "user_url": "",
                "user_registered": "2018-03-06 10:03:06",
                "user_description": "",
                "user_avatar": "<img alt='' src='https://secure.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=96&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=192&#038;d=mm&#038;r=g 2x' class='avatar avatar-96 photo' height='96' width='96' />"
            },
            "author_job_title": "CEO,",
            "featured": true
        },
        "_links": {
            "self": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/blogs/19"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/blogs"
                }
            ],
            "about": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/types/blogs"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/media?parent=19"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    }
]
```


### Projects API

```url
GET /projects
```

| Attribute     | Type          | Description   |
| :---          | :---          | :---          |
| featured      | String        |  `true` to find featured projects |
| page          | Integer       | `1` will bring 10 latest posts or `2` to fetch from page #2 |
| per_page      | Integer       |  `10` will set the posts per page to 10. |

```json
[
    {
        "id": 40,
        "date": "2018-05-11T01:07:25",
        "date_gmt": "2018-05-11T01:07:25",
        "guid": {
            "rendered": "http://admin.academyv3.tk/?post_type=projects&#038;p=40"
        },
        "modified": "2018-05-11T02:03:03",
        "modified_gmt": "2018-05-11T02:03:03",
        "slug": "field-engineer",
        "status": "publish",
        "type": "projects",
        "link": "https://admin.academyv3.tk/projects/field-engineer/",
        "title": {
            "rendered": "Field Engineer"
        },
        "content": {
            "rendered": "",
            "protected": false
        },
        "featured_media": 0,
        "template": "",
        "acf": {
            "Field Engineer": false,
            "client_name": "Field Engineer",
            "project_title": "Field Engineer",
            "featured_image": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/11010242/i-phone-macbook%402x.png",
            "project_description": "<b>Field Engineer</b> is a gig economy platform for freelance engineers to find work and get paid. We worked alongside their team to create a 2-sided web aand mobile app for businesses and engineers to contract.",
            "section_1_title": "The Problem",
            "section_1_description": "Advertising Media Buyers were having trouble invisioning what the future might be like for their jobs, we set out to show them what it could look like. After conducting research among industry experts, we brought to life a dream interface that only movie-magic could bring to life",
            "section_1_media": "<p><img class=\"alignnone size-medium wp-image-31\" src=\"https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10210424/stickies-300x201.jpg\" alt=\"\" width=\"300\" height=\"201\" /></p>\n",
            "section_2_title": "The Process",
            "section_2_description": "Advertising Media Buyers were having trouble envisioning what the future might be like for their jobs, we set out to show them what it could look like. After conducting research among industry experts, we brought to life a dream interface that only movie-magic could bring to life",
            "section_2_media": "<p><img class=\"alignnone size-medium wp-image-31\" src=\"https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10210424/stickies-300x201.jpg\" alt=\"\" width=\"300\" height=\"201\" /></p>\n",
            "section_3_title": "The Solution",
            "section_3_description": "Advertising Media Buyers were having trouble envisioning what the future might be like for their jobs, we set out to show them what it could look like. After conducting research among industry experts, we brought to life a dream interface that only movie-magic could bring to life",
            "section_3_media": "<p><img class=\"alignnone size-medium wp-image-31\" src=\"https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10210424/stickies-300x201.jpg\" alt=\"\" width=\"300\" height=\"201\" /></p>\n",
            "flow_image_1": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/11010426/01-marketplace%402x.png",
            "flow_image_2": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/11010444/02-filter%402x.png",
            "flow_image_3": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/11010507/03-job-det%402x.png",
            "flow_image_4": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/11010525/04-applied%402x.png",
            "large_image_1": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/11010620/profile%402x.jpg",
            "large_image_2": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/11010640/profile%402x1.jpg",
            "large_image": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/11010707/branding%403x.png",
            "password": "C8z71x4f4oYI",
            "next_project_link": {
                "ID": 29,
                "post_author": "1",
                "post_date": "2018-05-10 21:06:38",
                "post_date_gmt": "2018-05-10 21:06:38",
                "post_content": "",
                "post_title": "SPACER",
                "post_excerpt": "",
                "post_status": "publish",
                "comment_status": "closed",
                "ping_status": "closed",
                "post_password": "",
                "post_name": "spacer",
                "to_ping": "",
                "pinged": "",
                "post_modified": "2018-05-11 02:03:14",
                "post_modified_gmt": "2018-05-11 02:03:14",
                "post_content_filtered": "",
                "post_parent": 0,
                "guid": "http://admin.academyv3.tk/?post_type=projects&#038;p=29",
                "menu_order": 0,
                "post_type": "projects",
                "post_mime_type": "",
                "comment_count": "0",
                "filter": "raw"
            }
        },
        "_links": {
            "self": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/projects/40"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/projects"
                }
            ],
            "about": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/types/projects"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/media?parent=40"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    },
    {
        "id": 29,
        "date": "2018-05-10T21:06:38",
        "date_gmt": "2018-05-10T21:06:38",
        "guid": {
            "rendered": "http://admin.academyv3.tk/?post_type=projects&#038;p=29"
        },
        "modified": "2018-05-11T02:03:14",
        "modified_gmt": "2018-05-11T02:03:14",
        "slug": "spacer",
        "status": "publish",
        "type": "projects",
        "link": "https://admin.academyv3.tk/projects/spacer/",
        "title": {
            "rendered": "SPACER"
        },
        "content": {
            "rendered": "",
            "protected": false
        },
        "featured_media": 0,
        "template": "",
        "acf": {
            "client_name": "CBRE",
            "project_title": "Spacer",
            "featured_image": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10210249/i-phone-macbook.jpg",
            "project_description": "<b>CBRE</b> is an international leader in real estate. We worked alongside their team to create Spacer, a web a mobile app that recommends custom space programs for businesses.",
            "section_1_title": "The Problem",
            "section_1_description": "Advertising Media Buyers were having trouble envisioning what the future might be like for their jobs, we set out to show them what it could look like. After conducting research among industry experts, we brought to life a dream interface that only movie-magic could bring to life.",
            "section_1_media": "<p><img class=\"alignnone size-medium wp-image-31\" src=\"https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10210424/stickies-300x201.jpg\" alt=\"\" width=\"300\" height=\"201\" /></p>\n",
            "section_2_title": "The Process",
            "section_2_description": "Advertising Media Buyers were having trouble envisioning what the future might be like for their jobs, we set out to show them what it could look like. After conducting research among industry experts, we brought to life a dream interface that only movie-magic could bring to life.",
            "section_2_media": "<p><img class=\"alignnone size-medium wp-image-31\" src=\"https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10210424/stickies-300x201.jpg\" alt=\"\" width=\"300\" height=\"201\" /></p>\n",
            "section_3_title": "The Solution",
            "section_3_description": "CBRE created Spacer, an online tool to consult new office space based on a quiz. Upon receiving your results, a Spacer team member reaches out to start the office search ",
            "section_3_media": "<p><img class=\"alignnone size-medium wp-image-39\" src=\"https://cdn1.academy-ny.com/wp-content/uploads/2018/05/11001323/diagnol%402x-300x300.jpg\" alt=\"\" width=\"300\" height=\"300\" /></p>\n",
            "flow_image_1": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10211152/landing-page.jpg",
            "flow_image_2": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10211217/landing-page-2.jpg",
            "flow_image_3": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10211248/quiz.jpg",
            "flow_image_4": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10211311/end-quiz.jpg",
            "large_image_1": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10211920/profile%403x.jpg",
            "large_image_2": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10212214/profile%403x1.jpg",
            "large_image": "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/10212606/logo.png",
            "password": "C8z71x4f4oYI",
            "next_project_link": {
                "ID": 40,
                "post_author": "1",
                "post_date": "2018-05-11 01:07:25",
                "post_date_gmt": "2018-05-11 01:07:25",
                "post_content": "",
                "post_title": "Field Engineer",
                "post_excerpt": "",
                "post_status": "publish",
                "comment_status": "closed",
                "ping_status": "closed",
                "post_password": "",
                "post_name": "field-engineer",
                "to_ping": "",
                "pinged": "",
                "post_modified": "2018-05-11 02:03:03",
                "post_modified_gmt": "2018-05-11 02:03:03",
                "post_content_filtered": "",
                "post_parent": 0,
                "guid": "http://admin.academyv3.tk/?post_type=projects&#038;p=40",
                "menu_order": 0,
                "post_type": "projects",
                "post_mime_type": "",
                "comment_count": "0",
                "filter": "raw"
            }
        },
        "_links": {
            "self": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/projects/29"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/projects"
                }
            ],
            "about": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/types/projects"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://admin.academyv3.tk/wp-json/wp/v2/media?parent=29"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    }
]
```