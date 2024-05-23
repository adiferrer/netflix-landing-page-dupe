import { forEach } from 'lodash';
import './styles.css';

function renderSignUpFormEng() {
    const div = document.createElement('div');
    div.classList.add('form-container');
    const paragraph = document.createElement('p');
    paragraph.classList.add('form-paragraph');
    paragraph.textContent = 'Ready to watch? Enter your email to create or restart your membership.';
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.placeholder = 'Email address';
    const button = document.createElement('button');
    button.textContent = 'Get Started';
    form.append(input, button);
    div.append(paragraph, form);
    
    return div;
}

function renderEnglishLandingPage() {
    const element = document.createElement('div');
    element.classList.add('english-container');

    // Header Hero
    const header = document.createElement('header');
    header.classList.add('header-container');
    const headerHero = document.createElement('div');
    headerHero.classList.add('hero-section');
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
    
    const bannerForm = renderSignUpFormEng();
    banner.append(bannerHeader, bannerSubHeader, bannerForm);
    headerHero.append(nav, banner);
    header.append(headerHero);
    element.appendChild(header);

    // Subheroes 1-4
    const subheroContent = [
        {
            header: 'Enjoy on your TV.',
            subHeader: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
        },
        {
            header: 'Download your shows to watch offline.',
            subHeader: 'Save your favorites easily and always have something to watch.'
        },
        {
            header: 'Watch everywhere.',
            subHeader: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
        },
        {
            header: 'Create profiles for kids.',
            subHeader: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
        }
    ];
    forEach(subheroContent, (content) => {
        const subHeroContainer = document.createElement('div');
        subHeroContainer.classList.add('subhero-container');
        const subHero = document.createElement('div');
        subHero.classList.add('hero-section');
        const subHeroText = document.createElement('div');
        subHeroText.classList.add('subhero-text');
        const subHeroHeader = document.createElement('h1');
        subHeroHeader.textContent = content.header;
        const subHeroSubHeader = document.createElement('h2');
        subHeroSubHeader.textContent = content.subHeader;
        subHeroText.append(subHeroHeader, subHeroSubHeader);
        subHero.append(subHeroText);
        subHeroContainer.append(subHero);
        element.append(subHeroContainer);
    });

    // FAQ Hero
    const faqHeroContainer = document.createElement('div');
    faqHeroContainer.classList.add('faq-hero');
    const faqHero = document.createElement('div');
    faqHero.classList.add('hero-section');
    const faqHeroHeader = document.createElement('h1');
    faqHeroHeader.textContent = 'Frequently Asked Questions';

    const faqHeroContent = [
        {
            header: 'What is Netflix?',
            paragraphs: [
                'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
                'You can watch as much as you want, whenever you want, without a single commercial – all for one low monthly price. There\'s always something new to discover, and new TV shows and movies are added every week!'
            ]
        },
        {
            header: 'How much does Netflix cost?',
            paragraphs: [
                'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₱149 to ₱549 a month. No extra costs, no contracts.'
            ]
        },
        {
            header: 'Where can I watch?',
            paragraphs: [
                'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.',
                'You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.'
            ]
        },
        {
            header: 'How do I cancel?',
            paragraphs: [
                'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
            ]
        },
        {
            header: 'What can I watch on Netflix?',
            paragraphs: [
                'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
            ]
        },
        {
            header: 'Is Netflix good for kids?',
            paragraphs: [
                'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
                'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
            ]
        }
    ]
    const questions = document.createElement('div');
    questions.classList.add('faq-questions');
    forEach(faqHeroContent, (content) => {
        const question = document.createElement('div');
        question.classList.add('faq-question');
        const faqHeroSubHeader = document.createElement('button');
        faqHeroSubHeader.classList.add('faq-collapsible');
        const faqHeroSubHeaderContent = document.createElement('h2');
        faqHeroSubHeaderContent.textContent = content.header;
        faqHeroSubHeader.append(faqHeroSubHeaderContent);

        const questionAnswer = document.createElement('div');
        questionAnswer.classList.add('question-answer');
        forEach(content.paragraphs, (paragraph) => {
            const p = document.createElement('h2');
            p.textContent = paragraph;
            questionAnswer.append(p);
        });
        question.append(faqHeroSubHeader, questionAnswer);

        faqHeroSubHeader.addEventListener("click", function() {
            this.classList.toggle("active");
            const active = document.querySelector('.faq-collapsible.active');
            const faqContent = this.nextElementSibling;
            if (faqContent.style.maxHeight) {
                faqContent.style.maxHeight = null;
            } else {
                faqContent.style.maxHeight = `${faqContent.scrollHeight}px`;
            } 
        });
        questions.append(question);
    });
    const faqForm = renderSignUpFormEng();
    faqHero.append(faqHeroHeader, questions, faqForm);
    faqHeroContainer.append(faqHero);
    element.append(faqHeroContainer);

    // Footer 
    const footer = document.createElement('footer');
    const footNote = document.createElement('div');
    footNote.classList.add('footnote');
    const disclaimer = document.createElement('p');
    disclaimer.textContent = 'This was created for duplication purposes only. All rights reserved to Netflix.';
    const credit = document.createElement('p');
    credit.textContent = '© Jeanne Ferrer, 2024';
    footNote.append(disclaimer, credit);
    footer.append(footNote);
    element.appendChild(footer);

    return element;
}

document.body.appendChild(renderEnglishLandingPage());

/**
 * en:
 * 
 * hero 1:
 * nav button: Sign In
 * h1: Unlimited movies, TV shows, and more.
 * h2: Watch anywhere. Cancel anytime.
 * p: Ready to watch? Enter your email to create or restart your membership.
 * hero button: Get Started
 * 
 * hero 2:
 * h1: Enjoy on your TV.
 * h2: Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
 * 
 * hero 3:
 * h1: Download your shows to watch offline.
 * h2: Save your favorites easily and always have something to watch.
 * 
 * hero 4:
 * h1: Watch everywhere.
 * h2: Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
 * 
 * hero 5:
 * h1: Create profiles for kids.
 * h2: Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
 * 
 * faq hero:
 * h1: Frequently Asked Questions
 * p1: Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
 * p2: You can watch as much as you want, whenever you want, without a single commercial – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
 * 
 * h2: How much does Netflix cost?
 * p1: Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₱149 to ₱549 a month. No extra costs, no contracts.
 * 
 * h2: Where can I watch?
 * p1: Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.
 * p2: You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
 * 
 * h2: How do I cancel?
 * p1: Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
 * 
 * h2: What can I watch on Netflix?
 * p1: Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
 * 
 * h2: Is Netflix good for kids?
 * p1: The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
 * p2: Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
 */