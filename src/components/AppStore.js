import React, { useState } from 'react';
import Header from './Header';
import Featured from './Featured';
import Categories from './Categories';
import AppCard from './AppCard';
import './AppStore.css';

const AppStore = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const categories = [
        {
            name: 'Games',
            apps: [
                { 
                    name: 'Vietnam BlackOps', 
                    description: "We're in Vietnam!", 
                    icon: require('../Images/blackops.jpg'), 
                    link: 'https://download948.mediafire.com/olwnpc0g59cgnZvasD12ik98_3StgydvKGCnhEgsH9F1Mfq13vl4wQv4Kwhv1oYWYtw_BEixAA4cjLNmVLGSKuYzUepCU473zOA5hiOXnkIuW3YPKaVTvAqfbMNwWDl8hh6V4x8faVJLi6mX-CMzypDNup9jIyd-rr2-TRQLkq8/ciuynl3m3k2k8ek/Vietnam_Black_Ops_Win_ROM_EN.zip'
                },
                { 
                    name: 'Chess', 
                    description: 'Play Chess FREE at #1 Chess Site!', 
                    icon: require('../Images/chess.png'), 
                    link: 'https://github.com/Zenahr/lichess-desktop-app/releases/download/v1.0.0/Win64.zip'
                },
                { 
                    name: 'Need for Speed 2 SE', 
                    description: 'The thrill of the Chase!', 
                    icon: require('../Images/needforspeed.jpg'),
                    link: 'https://www.myabandonware.com/download/lvp7-need-for-speed-ii-se'
                },
                { 
                    name: 'World Championship Snooker', 
                    description: 'Every Shot Counts', 
                    icon: require('../Images/snooker.jpg'), 
                    link: 'https://download856.mediafire.com/00i9sk51xdkgw6VwQWeQUaqXsb8y6eZLQSgE44JGIOem38NavDwpudh8wDsyq8avUsHNL87Lk9BX_8E7YSVihr5K-Pr5RxdxaTuqa0whxsISLp9-nhCNXywXPz9MFOR8SJpndsqPGg82W5haEisWgoBAd5a9I3NYJ9bB545U3Qo/kbin8j8mmd1bjhw/World_Championship_Snooker_2004_Win_ISO_EN.zip'
                },
                { 
                    name: 'OpenTTD', 
                    description: 'Become the Transport Tycoon', 
                    icon: require('../Images/OpenTTD.jpg'), 
                    link: 'https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-win64.exe'
                }
            ]
        },
        {
            name: 'Productivity',
            apps: [
                { name: 'LibreOffice', description: 'Office for free', icon: require('../Images/LibreOffice.png'),
                    link: 'https://download.documentfoundation.org/libreoffice/stable/24.8.3/win/x86_64/LibreOffice_24.8.3_Win_x86-64.msi',
                },
                { name: 'Todoist', description: 'A Todolist to organize your life', icon: require('../Images/Todoist.png'),
                    link: 'https://todoist.com/windows_app'
                },
                { name: 'Obsidian', description: 'Sharpen your thinking', icon: require('../Images/Obsidian.jpg'),
                    link: 'https://github.com/obsidianmd/obsidian-releases/releases/download/v1.6.7/Obsidian-1.6.7.exe'
                },
                { name:'Alomware Toolbox', description: 'Enhance your productivity.', icon: require('../Images/alomwaretoolbox.avif'),
                    link: 'https://www.alomware.com/files/Toolbox_v5300.zip'},
                { name: 'Sunsama', description: 'Make Work-Life Balance a reality', icon: require('../Images/sunsama.jpg'),
                    link: 'https://desktop.sunsama.com/'
                }
            ]
        },
        {
            name: 'Social',
            apps: [
                { name: 'WhatsApp', description: 'Message Privately.', icon: require('../Images/whatsapp.png'),
                    link: 'https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=website_cta_psi'
                },
                { name: 'Instagram', description: 'Share moments..', icon: require('../Images/insta.jpg'),
                    link: 'https://en.softonic.com/download-launch?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb3dubG9hZFR5cGUiOiJyaXNlSW5zdGFsbGVyIiwiZG93bmxvYWRVcmwiOiJodHRwczovL2Q1NTJsY25sZ2JjcWcuY2xvdWRmcm9udC5uZXQvcTZiSy9MOEs0ano3Y3EvYUxYUE1PSi9pbnN0YWdyYW0tNDIuMC4yMy1pbnN0YWxsZXIuZXhlIiwiYXBwSWQiOiJmOTZkZjg3ZC05MjZmLTQ5NTQtYmY1OC1mMzc3YTU3M2E2MzAiLCJwbGF0Zm9ybUlkIjoid2luZG93cyIsImlhdCI6MTczMzgyNDM4MCwiZXhwIjoxNzMzODI3OTgwfQ.eAy7jJWi21x6Vh2Mgpi9UTZc1adqTTJIn6rPpBcxe08'
                },
                { name: 'Reddit', description: 'Dive into anything.', icon: require('../Images/reddit.png'),
                    link: 'https://drive.google.com/file/d/1Pe2GFSzThK5ytv4XoU91eFHor-51OcKj/view?usp=sharing'
                },
                { name: 'Telegram', description: 'A New Era of Messaging', icon: require('../Images/telegram.png'),
                    link: 'https://telegram.org/dl/desktop/win64 '
                },  
                { name: 'LinkedIn', description: 'Welcome Professionals', icon: require('../Images/Linkedin.png'),
                    link: 'https://apps.microsoft.com/detail/9wzdncrfj4q7?launch=true&cid=linkedin_app_microsite&mode=mini&hl=en-us&gl=IN'
                }
            ]
        },
        {
            name: 'Music',
            apps: [
                { name: 'iTunes', description: 'Think Different.', icon:  require('../Images/itunes.png'),
                    link: 'https://www.techspot.com/downloads/downloadnowfile/70/?evp=674240c7e60c1cc6f5cace58684d6694&file=94'
                },
                { name: 'WinAmp', description: 'Lightweight music player', icon:  require('../Images/winamp.jpg'),
                    link: 'https://winamp-lite.en.softonic.com/download'
                },
                { name: 'foobar2000', description: 'Freeware audio player', icon:  require('../Images/foobar.png'),
                    link: 'https://www.foobar2000.org/getfile/foobar2000-x64_v2.1.6.exe'
                },
                { name: 'Aimp', description: 'Listen offline.', icon:  require('../Images/aimp.jpg'),
                    link: 'https://www.aimp.ru/?do=download.file&id=4'
                },
                { name: 'Tidal', description: 'Extraordinary sound quality', icon: require('../Images/tidal.png'),
                    link: 'https://download.tidal.com/desktop/TIDALSetup.exe'
                }
            ]
        },
        {
            name: 'Education',
            apps: [
                { name: 'Scratch', description: 'Learn to Code', icon: require('../Images/scratch.png'),
                    link: 'https://apps.microsoft.com/detail/9pfgj25jl6x3?hl=en-us&gl=IN'
                },
                { name: 'Desmos', description: 'Beautiful free math', icon: require('../Images/desmos.jpg'),
                    link: 'https://apps.microsoft.com/detail/9pcp13tkdxbw?hl=en-us&gl=IN'
                },
                { name: 'Udemy', description: 'The power of possibilities.', icon: require('../Images/Udemy.png'),
                    link: 'https://www.udemy.com/'
                },
                { name: 'PythonTutor', description: 'Learn Python', icon: require('../Images/python-tutor-python tutor.avif'),
                    link: 'https://apps.microsoft.com/detail/9wzdncrdm4mj?hl=en-us&gl=US'
                },
                { name: 'CodeAcademy', description: 'Learn to Code', icon: require('../Images/codeacademy.jpg'),
                    link: 'https://www.codecademy.com/register?redirect=%252F   '
                }
            ]
        }
    ];
    const filteredCategories = categories.map(category => ({
        ...category,
        apps: category.apps.filter(app =>
            app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }));

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    const filteredApps = selectedCategory
        ? filteredCategories.find(category => category.name === selectedCategory).apps
        : [];

    return (
        <div className="app-store">
            <Header 
                searchTerm={searchTerm} 
                onSearchChange={handleSearchChange} 
            />
            <Featured />
            <Categories 
                categories={categories} 
                onCategoryClick={handleCategoryClick} 
            />
            <div className="category-section">
                <h2>{selectedCategory || 'Select a category'}</h2>
                <div className="app-grid">
                    {filteredApps.length === 0 ? (
                        <p>App not found</p> // Display this message if no apps are found
                    ) : (
                        filteredApps.map((app) => (
                            <AppCard
                                key={app.name}
                                appName={app.name}
                                appDescription={app.description}
                                appIcon={app.icon}
                                appLink={app.link}  // Pass the download link here
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default AppStore;
