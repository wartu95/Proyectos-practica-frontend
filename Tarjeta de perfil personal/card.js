const followButton = document.querySelector('.Follow');
followButton.addEventListener('click', function() {
    if(this.textContent === 'Follow'){
        this.textContent = 'Following';
        this.classList.remove('bg-blue-500' ,'hover:bg-gray-500');
        this.classList.add('bg-gray-500', 'text-gray-800')
    } else {

        this.textContent = 'Follow';
        this.classList.remove('bg-gray-500', 'text-gray-800')
        this.classList.add('bg-blue-500' ,'hover:bg-gray-500');
    }
})

