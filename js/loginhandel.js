
//post data len api
function postData(url,data){
    let option={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    fetch(url,option)
    .then(function(reply){
        return reply.json();
    })
    .then(function(dat){
        console.log(dat);
    })
    .catch(function(){
        alert("Xảy ra lỗi mạng")
       })
        }
            
//chạy kiểm tra các mục đăng ký nếu ok thì post len api
//xử lý đăng ký
var registerHandle=function(selector){
    var registerBtn=document.querySelector(selector);
    registerBtn.addEventListener("click",function(){
        let check=true;
        this.parentElement.parentElement.querySelectorAll("input").forEach(function(x){
            if(x.parentElement.querySelector("span[class=msgError]").textContent!=false) {check=false;
            }
        });
        
        if (check==true){
        postData("https://my-json-server.typicode.com/vuakechuyen/mhl/comments",{
            userName:document.querySelector("[name=username]").value,
            email:document.querySelector("[name=email").value,
            password:document.querySelector("[name=password").value
        });}
    });
}
//xử lý đăng nhập
var loginHandle=function(selector){
    var loginBtn=document.querySelector(selector);          
    loginBtn.addEventListener("click",function(){
        let check=true;
        let emailValue=this.parentElement.parentElement.querySelector("input[name=email]").value;
        let passWordValue=this.parentElement.parentElement.querySelector("input[name=password]").value;
        
        this.parentElement.parentElement.querySelectorAll("input").forEach(function(x){
            if(x.parentElement.querySelector("span[class=msgError]").textContent!=false) {check=false;
            }
        });
        
        if (check==true){
            fetch("https://my-json-server.typicode.com/vuakechuyen/mhl/comments")
                .then(function(dat){
                    return dat.json();
                })
                .then(function(users){
                    let kt=false;
                    users.forEach(function(user){
                        if ((user.email===emailValue)&&(passWordValue===user.password)){
                                kt=true;
                                alert(`Chào mừng ${user.userName} đến với trang web của chúng tôi`);
                                return;
                            }
                        })
                    if (kt==false){alert("đăng nhập không thanh công")}    
                    
                })
                .catch(function(){
                 alert("Xảy ra lỗi mạng")
                })
        }
    }); 
    }
var eyes=document.querySelectorAll(".eye") 
    eyes.forEach(function(x){
        x.onclick=function(){
            this.parentElement.classList.toggle("user_check")
            if (this.parentElement.querySelector("input").getAttribute("type")==="password") { 
                this.parentElement.querySelector("input").removeAttribute("type","password")
                this.parentElement.querySelector("input").setAttribute("type","text")
            }
            else {
                this.parentElement.querySelector("input").removeAttribute("type","text")
                this.parentElement.querySelector("input").setAttribute("type","password")
        }
            
        }
    })

var messageContent=document.querySelector(".content")
messageContent.style.transform="translateX(-100%)"