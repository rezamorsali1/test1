document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {
   
  });

  const adduser = document.getElementById('add-user-buttom')
  adduser.addEventListener('click', () => {
    document.querySelector('.add_user_modal').classList.add('show')
    document.querySelector('.add_user_modal_back').classList.remove('dis-none')
  })


  document.querySelector('.add_user_modal_back').addEventListener('click',()=>{
    document.querySelector('.add_user_modal').classList.remove('show')
    document.querySelector('.add_user_modal_back').classList.add('dis-none')
  })
});
