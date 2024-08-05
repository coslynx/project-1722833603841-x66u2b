<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>project-1722833603841-x66u2b
</h1>
<h4 align="center">A Discord music bot built with Python and Discord.py for seamless music playback experience on servers.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Language-Python-blue" alt="">
  <img src="https://img.shields.io/badge/Framework-Discord.py-red" alt="">
  <img src="https://img.shields.io/badge/Audio-FFmpeg-blue" alt="">
  <img src="https://img.shields.io/badge/Database-Redis-black" alt="">
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/spectra-ai-codegen/project-1722833603841-x66u2b?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/spectra-ai-codegen/project-1722833603841-x66u2b?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/spectra-ai-codegen/project-1722833603841-x66u2b?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</p>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview

This repository houses a Discord music bot project built to enhance user engagement within Discord communities.  The bot provides a user-friendly interface for music playback, offering a robust and interactive experience.

## 📦 Features

This Discord music bot boasts a range of features designed for seamless and enjoyable music listening experiences on Discord servers:

| Feature           | Description                                                                                                                                   |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Music Playback     | Play music from various sources like YouTube, Spotify, and SoundCloud.                                                                       |
| Queue Management   | Manage a music queue: add, remove, reorder, shuffle, and loop songs.                                                                             |
| Playback Controls  | Control music playback: play, pause, resume, skip, and stop.                                                                                   |
| Voice Channel Integration | Join and leave voice channels to play music directly within your Discord community.                                                            |
| User Interface     | Intuitive command system with clear prompts and informative responses for easy interaction.                                                   |
| Now Playing Information | Display information about the currently playing song.                                                                              |
| Search Functionality | Search for music from different sources.                                                                                                    |
| Advanced Queue Management | Utilize a robust queue management system to view, skip, loop, and manage queue priority.                                                      |
| User-Specific Settings | Customize your experience with volume control, preferred sources, and custom commands.                                                        |
| Web-based Interface | (Optional) Develop a web interface for managing settings, configuring playlists, and monitoring activity.                                         |
| Radio Mode        | (Optional) Implement a radio mode for playing continuous streams from various sources.                                                            |

## 📂 Structure

```
└── bot
    ├── commands
    │   ├── music.js
    │   ├── admin.js
    │   ├── help.js
    │   ├── info.js
    │   ├── join.js
    │   ├── leave.js
    │   ├── play.js
    │   ├── pause.js
    │   ├── resume.js
    │   ├── skip.js
    │   ├── stop.js
    │   ├── queue.js
    │   ├── shuffle.js
    │   ├── loop.js
    │   ├── volume.js
    │   └── nowplaying.js
    ├── events
    │   ├── ready.js
    │   ├── messageCreate.js
    │   ├── voiceStateUpdate.js
    │   └── interactionCreate.js
    ├── services
    │   ├── musicService.js
    │   ├── queueService.js
    │   ├── playlistService.js
    │   └── youtubeService.js
    ├── utils
    │   ├── commandHandler.js
    │   ├── logger.js
    │   └── errorHandler.js
    └── config
        ├── env.config.js
        └── config.js
```

## 💻 Installation

### 🔧 Prerequisites

- Python 3.7 or higher
- pip (Python package installer)
- Discord Bot Token (Obtain one from the Discord Developer Portal: https://discord.com/developers/applications)

### 🚀 Setup Instructions

1. Clone the repository:
    - `git clone https://github.com/spectra-ai-codegen/project-1722833603841-x66u2b.git`
2. Navigate to the project directory:
    - `cd project-1722833603841-x66u2b`
3. Install dependencies:
    - `pip install -r requirements.txt`
4. Create a `.env` file in the root directory and add your Discord Bot Token:
    - `DISCORD_TOKEN=<your_discord_bot_token>`
5. Run the bot:
    - `python bot/main.js`

## 🏗️ Usage

1. Invite the bot to your Discord server:  
   - Go to the Discord Developer Portal and create a bot application.
   - Obtain the bot's OAuth2 URL (with the "bot" scope) from the Developer Portal.
   - Use the URL to invite the bot to your server. 
2. Use the following commands within a voice channel:
    - `!play <song name>`: Plays a song from a supported music service.
    - `!pause`: Pauses the currently playing song.
    - `!resume`: Resumes playback after pausing.
    - `!skip`: Skips the current song.
    - `!stop`: Stops playback and clears the queue.
    - `!queue`:  Shows the current music queue.
    - `!queue add <song name>`: Adds a song to the queue.
    - `!queue remove <song number>`: Removes a song from the queue.
    - `!shuffle`: Randomizes the order of songs in the queue.
    - `!loop`: Toggles looping the current song or the entire queue.
    - `!volume <number>`:  Adjusts the playback volume.
    - `!info`:  Displays information about the currently playing song.
    - `!join <channel name>`: Makes the bot join the specified voice channel.
    - `!leave`: Makes the bot leave the current voice channel.

## 🌐 Hosting

### 🚀 Deployment Instructions

1. Install Docker: 
   - Follow instructions for your operating system: https://docs.docker.com/get-docker/
2. Build a Docker Image:
    - `docker build -t discord-music-bot .` 
3. Run the Docker Container:
    - `docker run -d -p 8080:8080 discord-music-bot` 
    - Replace `8080` with a different port if necessary.

## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## 👏 Authors

- Drix10 - [Spectra.codes](https://spectra.codes) - [GitHub](https://github.com/Drix10)

  <p align="center">
    <h1 align="center">🌐 Spectra.Codes</h1>
  </p>
  <p align="center">
    <em>Why only generate Code? When you can generate the whole Repository!</em>
  </p>
  <p align="center">
	<img src="https://img.shields.io/badge/Developer-Drix10-red" alt="">
	<img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="">
	<img src="https://img.shields.io/badge/Backed_by-Google_&_Microsoft_for_Startups-red" alt="">
	<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
  <p>