var posts=["2024/08/02/第二篇博文/","2024/08/02/李可喻的博客/","2024/08/02/hello-world/","2024/05/03/新的/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };