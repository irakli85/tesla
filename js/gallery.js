    document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/gallery.json')
    .then(response => response.json())
    .then(data => {
        const teamMemb = document.querySelector('.teammembers');
        data.forEach( member => {
            teamMemb.appendChild(createMembers(member))
        })
        .catch(error => {
            console.error('error while fetching members', error)
        })
    })
});

function createMembers(member){
    const memberElement = document.createElement('div');
    memberElement.classList.add('member');
    
    const img = document.createElement('img');
    img.src = member.memberImage;
    img.alt = 'Team Info';
    memberElement.appendChild(img);

    const name = document.createElement('h1');
    name.textContent = member.name;
    memberElement.appendChild(name);

    const role = document.createElement('p');
    role.textContent = member.role;
    memberElement.appendChild(role);

    return memberElement;

}