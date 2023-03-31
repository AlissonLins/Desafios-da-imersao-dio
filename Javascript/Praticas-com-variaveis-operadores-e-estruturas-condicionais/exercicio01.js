/* 
    Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
    calcule sua média e sua  classificação conforme a tabela abaixo.
    
    Média = (nota 1 + nota 2 + nota 3) / 3
    
    Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, Aprovado; */

    nota1 = 3;
    nota2 = 5;
    nota3 = 9;

    media = (nota1 + nota2 +nota3 ) / 3;

    console.log(media)
    
    if (media < 5)  {
        console.log('Você foi reprovado neste semestre.')
    }else if (media >= 5 && media <= 7) {
        console.log('Você está em recuperação neste semstre.') 
    }
    else {
        console.log('Você foi aprovado neste semestre.')
    }
