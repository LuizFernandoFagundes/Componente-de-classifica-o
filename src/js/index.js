let resultado = document.querySelector('.resultado');

const btn=document.querySelector('.botao');
const selecao=document.querySelectorAll('.item');
const conteudoprincipal = document.querySelector('.conteudoPrincipal');
const conteudoSecundario= document.querySelector('.mensagemConfirmacao');

selecao.forEach((item)=>{
    item.addEventListener('click',()=>{
        
        resultado.innerHTML=`You selected out ${item.value} of 5`;
        const ativoatual = document.querySelector('.ativo');
        if(ativoatual){
            ativoatual.classList.remove('ativo');
            ativoatual.classList.add('item');
        }
        item.classList.remove('item');
        item.classList.add('ativo');
         
          
        
    });
});


btn.addEventListener('click',()=>{
    conteudoprincipal.classList.add('hidden');
    conteudoSecundario.classList.remove('hidden');
});
