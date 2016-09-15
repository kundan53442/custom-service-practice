myApp.service('blogService', function($http){
     
     var baseUrl = 'https://blog.theguywithideas.com/api/blogs';

     this.getAllBlog = function(){

     	return $http.get(baseUrl+'/all');
     }//end all blogs

     this.createBlog = function(blogData){

     	return $http.post(baseUrl+'/create',blogData);
     }// end create blog

     this.editBlog = function(blogId,blogData){

     	return $http.put(baseUrl+'/'+blogId+'/edit',blogData);
     }// end edit blog

     this.editCurrentBlog = function(blogId){

          return $http.get(baseUrl+'/'+blogId);
     }// end edit blog

     this.deleteBlog = function(blogId){

     	return $http.post(baseUrl+'/'+blogId+'/remove',null);
     }// end delete blog
     
     this.singleBlog = function(blogId){

          return $http.get(baseUrl+'/'+blogId);
     }// end delete blog

     return this; 
})//end blog service