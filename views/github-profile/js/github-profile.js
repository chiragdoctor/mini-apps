const profileCard = document.getElementById('profile-card');
const profileOtherDetails = document.getElementById('other-details');
const profileNotFound = document.getElementById('not-found');
const profileNameInput = document.getElementById('profile-name');
const apiUrl = 'https://api.github.com/users/';

function init() {
    profileCard.style.display = 'none';
    profileNotFound.style.display = 'none';
    profileOtherDetails.style.display = 'none';
    profileNameInput.addEventListener('change', onProfileNameChange);
}

function renderProfileCard(profile) {
    const { blog, public_repos, public_gists, bio, avatar_url, name, followers, following, html_url, location, company } = profile;
    profileCard.style.display = 'block';
    profileOtherDetails.style.display = 'block';
    const profileImage = document.getElementById('profile-image');
    const profileTitle = document.getElementById('profile-title');
    const profileFollower = document.getElementById('profile-followers');
    const profileFollowing = document.getElementById('profile-following');
    const profilePage = document.getElementById('profile-page');
    const profileLocation = document.getElementById('profile-location');
    const organization = document.getElementById('org');
    const repos = document.getElementById('repos');
    const gists = document.getElementById('gists');
    const biod = document.getElementById('bio');
    const blg = document.getElementById('blog');

    // Card Details
    profileImage.setAttribute('src', avatar_url)
    profileTitle.innerHTML = name;
    profileFollower.innerHTML = `Follower ${followers || 0}`;
    profileFollowing.innerHTML = `Following ${following || 0}`;
    profilePage.setAttribute('href', html_url);
    profileLocation.innerHTML = location;
    // Other Details

    organization.innerHTML = company || 'No Organization Data';
    biod.innerHTML = bio || 'No Bio data';
    repos.innerHTML = public_repos || 0;
    gists.innerHTML = public_gists || 0;
    blg.innerHTML = blog || 'No blog data'
}

function onProfileNameChange(event) {
    const profileName = event.target.value;
    if (profileName.length > 0) {
        axios.get(`${apiUrl}${profileName}`)
            .then(({ data }) => renderProfileCard(data))
            .catch((err) => {
                if (err) {
                    console.log('Error: ', err);
                }

                profileCard.style.display = 'none';
                profileOtherDetails.style.display = 'none';
                profileNotFound.style.display = 'block';
            });
    } else {
        profileCard.style.display = 'none';
        profileOtherDetails.style.display = 'none';
        profileNotFound.style.display = 'none';
    }
}



init();
