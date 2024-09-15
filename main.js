// Adiciona um event listener que aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {

    const nameElement = document.querySelector('#name');             
    const usernameElement = document.querySelector('#username');   
    const avatarElement = document.querySelector('#avatar');      
    const reposElement = document.querySelector('#repos');         
    const followersElement = document.querySelector('#followers'); 
    const followingElement = document.querySelector('#following'); 
    const linkElement = document.querySelector('#link');            

    // Faz uma requisição à API do GitHub para obter os dados do usuário
    fetch('')
        .then(function(res) {
            return res.json(); // Converte a resposta da API para o formato JSON
        })
        .then(function(json) {
        
            nameElement.innerText = json.name;             
            usernameElement.innerText = json.login;        
            avatarElement.src = json.avatar_url;           
            reposElement.innerText = json.public_repos;    
            followersElement.innerText = json.followers;   
            followingElement.innerText = json.following;   
            linkElement.href = json.html_url;              // Link do GitHub
        })
        .catch(function(error) {
            // Exibe uma mensagem de erro  caso ocorra algum problema
            console.log('Ocorreu um erro:', error);
        });
});
