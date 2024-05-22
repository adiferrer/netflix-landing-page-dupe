import './styles.css';

function renderEnglishLandingPage() {
    const element = document.createElement('div');
    element.classList.add('english-container');

    const header = document.createElement('header');
    header.classList.add('hero-section');
    const nav = document.createElement('nav');
    const netflixHeaderIcon = new Image();
    netflixHeaderIcon.src = 'https://i.ibb.co/r5krrdz/logo.png';
    netflixHeaderIcon.alt = 'Netflix';
    const rightNav = document.createElement('div');
    const languageDropdown = document.createElement('select');
    const languageOptions = ['English', 'Filipino'];
    languageOptions.forEach((language) => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        languageDropdown.appendChild(option);
    });
    const signInButton = document.createElement('button');
    signInButton.textContent = 'Sign In';
    rightNav.append(languageDropdown, signInButton);
    nav.append(netflixHeaderIcon, rightNav);

    const banner = document.createElement('div');
    const bannerHeader = document.createElement('h1');
    bannerHeader.textContent = 'Unlimited movies, TV shows, and more.';
    const bannerSubHeader = document.createElement('h2');
    bannerSubHeader.textContent = 'Watch anywhere. Cancel anytime.';
    const bannerParagraph = document.createElement('p');
    bannerParagraph.textContent = 'Ready to watch? Enter your email to create or restart your membership.';
    
    const bannerForm = document.createElement('form');
    const bannerInput = document.createElement('input');
    bannerInput.placeholder = 'Email address';
    const bannerButton = document.createElement('button');
    bannerButton.textContent = 'Get Started';
    bannerForm.append(bannerInput, bannerButton);
    banner.append(bannerHeader, bannerSubHeader, bannerParagraph, bannerForm);

    header.append(nav, banner);

    const footer = document.createElement('footer');
    const footNote = document.createElement('div');
    footNote.classList.add('footnote');
    const disclaimer = document.createElement('p');
    disclaimer.textContent = 'This was created for duplication purposes only. All rights reserved to Netflix.';
    const credit = document.createElement('p');
    credit.textContent = '© Jeanne Ferrer, 2024';
    footNote.append(disclaimer, credit);
    footer.append(footNote);
    
    element.append(header, footer);
    return element;
}

document.body.appendChild(renderEnglishLandingPage());