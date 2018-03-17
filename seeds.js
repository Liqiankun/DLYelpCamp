var Campground = require('./models/campground')
var Comment = require('./models/comment')
const campgrounds = [
  {
    name: 'Daivd Lee',
    image: 'https://images.unsplash.com/photo-1519821002907-f5cbdac1b0b3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f8d5e5171ffd36a0538b3d6b3d531a9&auto=format&fit=crop&w=800&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  },
  {
    name: 'Zoe Hu',
    image: 'https://images.unsplash.com/photo-1519838255388-73be30bda0e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7cc5eddbd67a14644848730ff1bfdd58&auto=format&fit=crop&w=500&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  },
  {
    name: 'Bran Liang',
    image: 'https://images.unsplash.com/photo-1519803114053-3a9d3c043c4a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=671e5f4345e6abef4db4ca7df2af4895&auto=format&fit=crop&w=800&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  },
  {
    name: 'MN Sun',
    image: 'https://images.unsplash.com/photo-1519658422992-0c8495f08389?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6353e8cd3cfc4e334f35696d0968645&auto=format&fit=crop&w=800&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  },
  {
    name: 'YC Zhang',
    image: 'https://images.unsplash.com/photo-1519762439175-3966811edb0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bbe9a436587ae1772a3fa01afa948acf&auto=format&fit=crop&w=800&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  },
  {
    name: 'Cook Tim',
    image: 'https://images.unsplash.com/photo-1519820586867-7f0ea0e4f218?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=15709085d73af20d640591ee45a1a20d&auto=format&fit=crop&w=800&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  },
  {
    name: 'Yuan Ge',
    image: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc27ce5f453203e4b82d163c181339ca&auto=format&fit=crop&w=500&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  },
  {
    name: 'Zoe Hu',
    image: 'https://images.unsplash.com/photo-1519831636921-a6eb08886aeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d30336966b0c311985deb88f1252db9f&auto=format&fit=crop&w=500&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  },
  {
    name: 'Note Lee',
    image: 'https://images.unsplash.com/photo-1519748174344-16e5d53bda7a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6e1db392e72009386cf7003df2ed3cf0&auto=format&fit=crop&w=500&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  },
  {
    name: 'Catalog',
    image: 'https://images.unsplash.com/photo-1519323751229-d99671f70424?ixlib=rb-0.3.5&s=5ec2b7d4859cee7c4970f6c686ee2639&auto=format&fit=crop&w=500&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  },
  {
    name: 'Max Liu',
    image: 'https://images.unsplash.com/photo-1502119421721-bf6e3c8f1921?ixlib=rb-0.3.5&s=6d386cd820f95a632b909d01c4bfca16&auto=format&fit=crop&w=500&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  },
  {
    name: 'Zonebe',
    image: 'https://images.unsplash.com/photo-1500044744318-d290fb890942?ixlib=rb-0.3.5&s=7f857be841b981964323fb06d2d2e4f8&auto=format&fit=crop&w=500&q=60',
    description: "Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples."
  }
]
module.exports = function seedDB () {
  Campground.remove({}, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log('remove success')
      campgrounds.forEach(function (campgd) {
        Campground.create(campgd, function (err, result) {
          if (err) {
            console.log(err)
          } else {
            console.log('create campground success')
            Comment.create({
              text: 'This girl is pretty!',
              author: 'David'
            }, function (err, comment) {
              if (err) {
                console.log(err)
              } else {
                result.comments.push(comment)
                result.save()
                console.log('comment create success')
              }
            })
          }
        })
      })
    }
  })
}
