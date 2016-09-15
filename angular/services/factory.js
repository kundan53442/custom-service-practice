myApp.factory('blogService', function($http){
     
     var blogAPIS = {};
     var baseUrl = 'https://blog.theguywithideas.com/api/blogs';

     blogAPIS.getAllBlog = function(){

     	return $http.get(baseUrl+'/all');
     }//end all blogs

     blogAPIS.createBlog = function(blogData){

     	return $http.post(baseUrl+'/create',blogData);
     }// end create blog

     blogAPIS.editBlog = function(blogId,blogData){

     	return $http.get(baseUrl+'/'+blogId+'/edit',blogData);
     }// end edit blog

     blogAPIS.deleteBlog = function(blogId){

     	return $http.get(baseUrl+'/'+blogId+'/remove',null);
     }// end delete blog

        return blogAPIS;
})//end blog service