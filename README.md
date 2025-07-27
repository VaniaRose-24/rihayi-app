# 🌐 RIHAYI – The Voice of the Unheard
My RIHAYI PWA prototype.

**Rihayi** is a socially driven mobile platform designed to support and empower **migrant workers**, **displaced individuals**, and **vulnerable communities** through multilingual, emotionally-aware assistance. By combining voice/text input, AI-powered emotion + issue analysis, and contextual support recommendations, Rihayi ensures no voice goes unheard — no matter the language, background, or struggle.

---

## ✨ Key Features

- 🎙️ **Voice & Text Input** – Accepts both spoken and written input from users in their native languages.
- 🌐 **Multilingual Support** – Handles multiple Indian languages for broader accessibility.
- 🧠 **Emotion & Issue Classification** – Uses AI to analyze user input and classify emotions and underlying issues.
- 💬 **Empathetic Responses** – Provides comforting, context-aware replies to support emotional well-being.
- 🧾 **Support Resource Suggestions** – Recommends relevant helplines, schemes, or support services.
- 📞 **Connect to NGOs / Networks** *(Planned)* – Aims to integrate with welfare bodies and emergency contacts.

---

## 🎯 Mission

> _"To bridge the emotional and systemic gap between vulnerable voices and the support they deserve — using empathy, AI, and multilingual technology."_

---

## 🛠️ Tech Stack

| Layer            | Technology                           |
|------------------|--------------------------------------|
| Frontend         | React Native (Expo)                  |
| NLP & ML         | BERT / LSTM (Emotion + Issue Classifier) |
| Language Tools   | i18n-js, Google TTS/STT, Expo AV     |
| Backend (Planned)| Firebase / Python / Node.js APIs     |
| Deployment       | Android (iOS support planned)        |

---

## 📦 Installation

### Prerequisites

- Node.js & npm
- Expo CLI (`npm install -g expo-cli`)
- Android Emulator or Expo Go App (on mobile)

### Run Locally

```bash
git clone https://github.com/<your-username>/Rihayi.git
cd Rihayi
npm install
npx expo start
