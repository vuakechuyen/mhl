var userName=document.querySelector("input[name=username]"),
    email=document.querySelector("input[name=email]"),
    pwd=document.querySelector("input[name=password]"),
    confirmPwd=document.querySelector("input[name=cofirm_password");
var formList=document.querySelectorAll(".form_input>input");
var errorIcon="<i class=\"fa-solid fa-triangle-exclamation\"></i>"
function validate(){


}

function isRequire(currentElement){
    currentElement.classList.add("error_border");
    currentElement.parentElement.querySelector("span[class=msgError]").innerHTML= `${errorIcon}   Đây là trường bắt buộc !`;
}
function isMax(currentElement,maxNumber){
    currentElement.classList.add("error_border");
    currentElement.parentElement.querySelector("span[class=msgError]").innerHTML= `${errorIcon}   Mật khẩu nhỏ hơn ${maxNumber} ký tự !`;

}
function isMin(currentElement,minNumber){
    currentElement.classList.add("error_border");
    currentElement.parentElement.querySelector("span[class=msgError]").innerHTML= `${errorIcon}   Mật khẩu lớn hơn ${minNumber} ký tự !`;

}


function check(x,cb){
    x.addEventListener("blur",function(e){
        if (e.target.value!=false) {
            if (this.name=="password"){
                if (this.value.length<this.min){isMin(this,this.min)};
                if (this.value.length>this.max){isMin(this,this.max)};
                
            }
        }
        else isRequire(this);
        
    });
}
formList.forEach(function(xxx){
    check(xxx,function(){      
    });
    xxx.addEventListener("focus",function(){
        this.parentElement.querySelector("span[class=msgError]").innerHTML="";
        this.classList.remove("error_border");
    });
    });

        


