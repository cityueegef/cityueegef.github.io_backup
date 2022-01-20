
const para = document.querySelectorAll('.original');
const rates= document.querySelectorAll('.rate');
const zhugong_rates=document.querySelectorAll('.zhugong_rate');
const zhongchen_rates=document.querySelectorAll('.zhongchen_rate');
const fanzei_rates=document.querySelectorAll('.fanzei_rate');
const neijian_rates=document.querySelectorAll('.neijian_rate');
const result_display_details =document.querySelector('.result_display_details');
class original{

}
let selected=-1;

for (var i = 0; i < para.length; ++i) {
    para[i].addEventListener('click', updateName); 
    para[i].addEventListener('dblclick',resetBack);
    para[i].setAttribute('id',i);
}




let count =0;
const button =document.querySelector('button');
const tianlao_label=document.querySelector('label');
const result_label=document.querySelector('.result_display')
button.addEventListener('click',getResult);

function updateCount(){
    //tianlao_label.textContent = data;

    tianlao_label.textContent = '天牢外武将数：'+count;
}

function updateName() {
    if (this.className !=='selected'){
        count++;
        this.className= 'selected';
        console.log(this.id)
    }
    updateCount();
}

function resetBack(){
    this.className='original';
    count--;
    updateCount();
}

function is_valid(t){
    if(isNaN(t)){
        return false;
    }
    return true;
}
function getResult(){
    if(count<20){
        result_label.textContent="天牢外武将数不足！";
        result_display_details.textContent="";
        return;
    }
    var res="你的天牢平均胜率为：";
    var res_details="";
    var elements = document.getElementsByClassName("selected")
    var sum=0;
    var valid_zhugong=0;
    var valid_zhongchen=0;
    var valid_fanzei=0;
    var valid_neijian = 0;
    var valid_rate=0;
    var sum_zhugong=0;
    var sum_zhongchen=0;
    var sum_fanzei=0;
    var sum_neijian=0;
    for (var i = 0; i < elements.length; ++i) {
        var id =elements[i].id;

        var val =rates[id].textContent.replace("%","");
        var val_zhugong=zhugong_rates[id].textContent.replace("%","");
        var val_zhongchen=zhongchen_rates[id].textContent.replace("%","");
        var val_fanzei=fanzei_rates[id].textContent.replace("%","");
        var val_neijian=neijian_rates[id].textContent.replace("%","");
        if(is_valid(val)){
            val=parseInt(val);
            valid_rate++;
            sum+=val;
        }
        if(is_valid(val_zhugong)){
            val_zhugong=parseInt(val_zhugong);
            valid_zhugong++;
            sum_zhugong+=val_zhugong;
        }
        if(is_valid(val_zhongchen)){
            val_zhongchen=parseInt(val_zhongchen);
            valid_zhongchen++;
            sum_zhongchen+=val_zhongchen;
        }
        if(is_valid(val_fanzei)){
            val_fanzei=parseInt(val_fanzei);
            valid_fanzei++;
            sum_fanzei+=val_fanzei;
        }
        if(is_valid(val_neijian)){
            val_neijian=parseInt(val_neijian);
            valid_neijian++;
            sum_neijian+=val_neijian;
        }
    }
    sum_zhugong/=valid_zhugong;
    sum_zhongchen/=valid_zhongchen;
    sum_fanzei/=valid_fanzei;
    sum_neijian/=valid_neijian;
    sum/=valid_rate;
    res_details+="总胜率: ";
    res_details+=sum.toFixed(2);
    res_details+="% ";
    res_details+="主公";
    res_details+=sum_zhugong.toFixed(2);
    res_details+="% 忠臣";
    res_details+=sum_zhongchen.toFixed(2);
    res_details+="% 反贼";
    res_details+=sum_fanzei.toFixed(2);
    res_details+="% 内奸";
    res_details+=sum_neijian.toFixed(2);
    res_details+="%";
    result_label.textContent=res;
    result_display_details.textContent=res_details;
    window.open('new.html');
}