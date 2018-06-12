const fetchUrl = process.env.adminUrl;
const baseUrl = "https://" + fetchUrl + "/wp-json/wp/v2/";
require('isomorphic-fetch');

const fetchData = async (url) => {
    try{
        const dataRes = await fetch(url);
        const dataJson = await dataRes.json();
        if (dataJson !== undefined)
            return dataJson;
        else{
            return {"code": "error"}
        }   
    }
    catch(error){
        console.error(error);
        return  {"code": "error"}
    }
}

//fetching blogPosts' slugs for sitemap
const data = async (postType) => {
    let Posts = [];
    
    const url = baseUrl + postType + "?per_page=100&page=";

    //while we receive Postyle: blogPosts or Projects, receive 'em and append results
    let pageNo = 1;
    while (true){
        let Json = await fetchData(url + pageNo);
        if ("code" in Json)
            break
        
        Json.map((type) => {
            if (type.acf.password === '')
            Posts.push({ slug: `${type.slug}` })
        })
        pageNo = pageNo + 1;
    }
    return Posts;
}
    

//fetching blogPosts' slugs for sitemap
const blogs = async () => await data("blogs")

//fetching Projects' slugs for sitemap
const projects = async () => await data("projects") 

module.exports =  { blogs, projects }