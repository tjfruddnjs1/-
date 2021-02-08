   const username = document.getElementById('username');
   const gender = document.getElementsByName('gender'); // 배열
   const firm = document.getElementById('firm');
   const department = document.getElementById('department');
   const career = document.getElementById('career');   
   const phone = document.getElementById('phone');   
   const email = document.getElementById('email');
   const intro = document.getElementById('intro');
   const image = document.getElementById('image');
   const form = document.getElementById('mentorForm');


function submit(){
  document.getElementById('submit').addEventListener('click',  function(e){       
    
        var flag = false;
        if(!username.value){
          alert('이름 입력하세요');
          username.focus();
          username.style.borderColor = "red";
          return false;
        }
        if(!firm.value){
          alert('회사를 입력하세요');          
          firm.focus();
          firm.style.borderColor = "red";
          return false;
        }
        if(!department.value){
          alert('부서 입력하세요');
          department.focus();
          department.style.borderColor = "red";
          return false;
        }
        if(!career.value){
          alert('경력 입력하세요');
          career.focus();
          career.style.borderColor = "red";
          return false;
        }
        if(!phone.value){
          alert('핸드폰 번호를 입력하세요');
          phone.focus();
          phone.style.borderColor = "red";
          return false;
        }
        if(!email.value){
          alert('이메일 입력하세요');
          email.focus();
          email.style.borderColor = "red";
          return false;
        }
        if(!image.value){
          alert('사진을 선택하세요');
          return false;
        }      
        form.submit();
        return false;
   });

}

submit();