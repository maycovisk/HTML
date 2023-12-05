$(document).ready(function(){ /**Executa o script após o carregamento completo da página.**/
    $(window).scroll(function(){/**Altera a classe da barra de navegação e do botão de rolagem para cima com base na posição de rolagem da página.**/
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    $('.scroll-up-btn').click(function(){ /**Anima a rolagem da página de volta ao topo ao clicar no botão de rolagem para cima.**/
        $('html').animate({scrollTop: 0});
    });

    var typed1 = new Typed(".typing", { /**Cria um efeito de digitação animado em elementos específicos com opções de velocidade e looping.**/
        strings: ["Assessoria em Tecnologia", "Suporte", "Gestão IT", "Consultoria"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", { /**Cria um efeito de digitação animado em elementos específicos com opções de velocidade e looping.**/
        strings: ["Consultoria", "Suporte", "Desenvolvimento", "Analista"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    $('.menu-btn').click(function(){ /**Alterna a visibilidade do menu e o ícone do botão do menu ao clicar.**/
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.carousel').owlCarousel({/** Inicializa um carrossel responsivo de conteúdo com várias configurações de visualização e interação.**/
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});




