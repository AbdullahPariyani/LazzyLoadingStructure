import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-hamburger',
    templateUrl: './hamburger.component.html',
    animations: [
        trigger('openCloseAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'scale(1.2)' }),
                animate('.3s', style({ opacity: 1, transform: 'scale(1.0)' }))
            ]),
            transition(':leave', [
                style({ opacity: 1, transform: 'scale(1.0)' }),
                animate('.3s', style({ opacity: 0, transform: 'scale(1.2)' }))

            ])
        ])
    ]
})

export class HamburgerComponent implements OnInit {
    hamburgerTitle: string = 'Menu';
    showHamburgerMenu: boolean = false;
    isScrolling: boolean = false;
    enableHamburgerLocalLink = false;
    hamburgerItems: any[] = [
        {
            title: 'stel je vraag',
            url: 'https://www.asr.nl/'
        },
        {
            title: 'producten',
            url: 'https://www.asr.nl/producten'
        },
        {
            title: 'adviseurs',
            url: 'https://www.asr.nl/adviseurs'
        },
        {
            title: 'over a.s.r.',
            url: 'https://www.asr.nl/over-asr'
        },
        {
            title: 'blog',
            url: 'https://www.asr.nl/blog'
        },
        {
            title: 'login',
            url: 'https://www.asr.nl/login'
        }
    ];

    hamburgerFooterItems: any[] = [
        {
            title: 'privacyverklaring',
            url: 'https://www.asrnederland.nl/privacyverklaring'
        },
        {
            title: 'disclaimer',
            url: 'https://www.asr.nl/disclaimer'
        },
        {
            title: 'cookieverklaring',
            url: 'https://www.asr.nl/cookieverklaring'
        },
        {
            title: 'fraudebeleid',
            url: 'https://www.asr.nl/fraudebeleid'
        },
        {
            title: 'beleggingsbeleid',
            url: 'https://www.asrnederland.nl/over-asr/bestuur-en-organisatie/beleid-en-richtlijnen/beleggingsbeleid'
        },
        {
            title: 'meldpunt digitale kwetsbaarheden',
            url: 'https://www.asrnederland.nl/meldpunt-digitale-kwetsbaarheden'
        },
        {
            title: '© a.s.r.'
        }
    ];

    toggleHamburgerMenu(): void {
        this.showHamburgerMenu = !this.showHamburgerMenu;
        document.documentElement.classList.toggle('overflow-hidden');
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
            document.getElementById('hamburger-icon').classList.add('hamburger-trigger__icon--scrolled');
        }
        else {
            document.getElementById('hamburger-icon').classList.remove('hamburger-trigger__icon--scrolled');
        }
    }



    constructor() { }

    ngOnInit(): void { }

}
