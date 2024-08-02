var posts=["2024/08/02/第二篇博文/","2024/08/02/李可喻的博客/","2024/08/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };