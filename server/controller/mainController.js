exports.homepage = async (req, res) => {
    const locals = {
        title: 'Node Js notes',
        description: "Free NodeJS Notes App"
    }
    res.render('index',{
        locals,
        layout:'../views/layouts/front-page'
    })
}

exports.about = async(req,res)=>{
    res.render('about')
}