const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
// noviteta ... v knjigi je zastarelo
mongoose.connect('mongodb://localhost/my_database');

//noviteta ... v knjigi je zastarelo

// BlogPost.create({
//     title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
//     body: 'ajde dost je tega gremo dalje'
// })
// .then(blogpost => {
//     console.log("Blog post created:", blogpost);
// })
// .catch(error => {
//     console.error("Error creating blog post:", error);
// });



BlogPost.find({ title: 'The Mythbuster’s Guide to Saving Money on Energy Bills' })
    .then(blogposts => {
        console.log('Found blog posts:', blogposts);
    })
    .catch(error => {
        console.error('Error finding blog posts:', error);
    })
    .finally(() => {
        //mongoose.disconnect();
    });


    let foundId = null;
    BlogPost.find({ title: 'Updated title' })
    .then(blogposts => {
        console.log('Found blog posts:', blogposts);
        foundId = blogposts[0]._id.toString();
        console.log(foundId);
    })
    .catch(error => {
        console.error('Error finding blog posts:', error);
    })
    .finally(() => {
        mongoose.disconnect();
    });


// const id = "65fed027273d453509a3788f";

// BlogPost.findByIdAndUpdate(id, { title: 'Updated title' })
//   .then(blogspot => {
//     console.log('Updated blog post:', blogspot);
//   })
//   .catch(error => {
//     console.error('Error updating blog post:', error);
//   });
  