---
title: "Workshop on the Evaluation and Interpretability for Spoken Language Systems — 8 mei 2026, Tilburg"
date: 2026-04-14
description: "Op 8 mei 2026 organiseert SOS een workshop over evaluatie en interpreteerbaarheid van gesproken-taalsystemen, met lezingen van onderzoekers uit Amsterdam, Delft en Tilburg."
auteur: "Redactie"
linkedin_tekst: "Op 8 mei organiseert Stichting Open Spraaktechnologie een workshop over evaluatie en interpreteerbaarheid van gesproken-taalsystemen. Met bijdragen van Jelle Zuidema (UvA), Hosein Mohebbi (Whispp/UvA), Gaofei Shen (Tilburg), Yuanyuan Zhang (TU Delft), Marianne de Heer Kloots (UvA) en Charlotte Pouw (UvA). Locatie: Mindlabs, Tilburg. #spraaktechnologie #NLP #interpretability"
---

Op **8 mei 2026** organiseert Stichting Open Spraaktechnologie een workshop over evaluatie en interpreteerbaarheid van gesproken-taalsystemen. De bijeenkomst vindt plaats bij **Mindlabs** in Tilburg (zaal ML1.28, Locomotiefboulevard 101) en duurt van 10:30 tot 15:00 uur.

Geïnteresseerden kunnen zich aanmelden via het [registratieformulier](https://docs.google.com/forms/d/e/1FAIpQLSd2aGFyUDbukycFkqwaj9qQan4sxR3j77R6HU6u5QfevB_oEQ/viewform?usp=dialog).

## Programma

**8th May 2026, 10:30–15:00**

| Spreker | Onderwerp |
|---------|-----------|
| — | Walk-in and coffee |
| Grzegorz Chrupała | Welcome |
| Hosein Mohebbi | Actionable Interpretability for Speech Transformers |
| Gaofei Shen | Beyond Decodability: Reconstructing Language Model Representations with an Encoding Probe |
| Yuanyuan Zhang | A Semi-spontaneous Dutch Speech Dataset for Speech Enhancement and Speech Recognition |
| — | Lunch (provided) |
| Jelle Zuidema | Keynote |
| — | Coffee break |
| Marianne de Heer Kloots | Tracking the emergence of linguistic structure in self-supervised models learning from speech |
| Charlotte Pouw | Analyzing In-Context Learning in Speech Language Models |

## Abstracts

### Actionable Interpretability for Speech Transformers
*Hosein Mohebbi, Whispp & University of Amsterdam*

Actionable interpretability refers to a recently growing focus within interpretability research community on turning our insights about model behaviors into something useful and practical. In this talk, I'll explore this idea in the domain of speech through two case studies. First, I'll discuss if we can disentangle linguistic content from acoustic features in speech models to enable improved controllability. Second, I'll discuss if we can adaptively compress contextual audio representations to improve model efficiency.

### Beyond Decodability: Reconstructing Language Model Representations with an Encoding Probe
*Gaofei Shen, Tilburg University (CSAI)*

Probing is widely used to study what language model internal hidden-states encode. However, most work treats probing as a one-way task: decoding information from model internal representations. This standard setup has two main limitations: probe scores are not directly comparable, and probe performance can reflect correlations among features rather than feature-specific effects. Inspired by bidirectional analysis in neuroscience, we present an Encoding Probe that reverses this direction. Instead of decoding linguistic features from model hidden-states, our probe uses human-defined linguistic features to reconstruct the internal representations of language models. We train regression probes and use feature ablations to estimate relative feature contributions. We evaluate the framework on text and speech transformer models including wav2vec2 variants and BERT, using feature sets spanning acoustics, phonetics, syntax, lexicon and speaker identity. Our results suggest that speaker related effects vary strongly across different training objectives/datasets, while syntactic and lexical features make distinct contributions at different magnitudes. These results show that encoding probe provides a complementary perspective on interpreting model representations beyond decodability.

### A Semi-spontaneous Dutch Speech Dataset for Speech Enhancement and Speech Recognition
*Yuanyuan Zhang, TU Delft*

We present DRES: a 1.5-hour Dutch realistic elicited (semispontaneous) speech dataset from 80 speakers recorded in noisy, public indoor environments. DRES was designed as a test set for the evaluation of state-of-the-art (SOTA) automatic speech recognition (ASR) and speech enhancement (SE) models in a real-world scenario: a person speaking in a public indoor space with background talkers and noise. The speech was recorded with a four-channel linear microphone array. In this work we evaluate the speech quality of five well-known single-channel SE algorithms and the recognition performance of eight SOTA off-the-shelf ASR models before and after applying SE on the speech of DRES. We found that five out of the eight ASR models have WERs lower than 22% on DRES, despite the challenging conditions. In contrast to recent work, we did not find a positive effect of modern single-channel SE on ASR performance, emphasizing the importance of evaluating in realistic conditions.

### Tracking the Emergence of Linguistic Structure in Self-supervised Models Learning from Speech
*Marianne de Heer Kloots, University of Amsterdam (ILLC)*

Self-supervised speech models learn effective representations of spoken language, which have been shown to reflect various aspects of linguistic structure. But when does such structure emerge in model training? We study the encoding of a wide range of linguistic structures, across layers and intermediate checkpoints of six Wav2Vec2 and HuBERT models trained on spoken Dutch. We find that different levels of linguistic structure show notably distinct layerwise patterns as well as learning trajectories, which can partially be explained by differences in their degree of abstraction from the acoustic signal and the timescale at which information from the input is integrated. Moreover, we find that the level at which pre-training objectives are defined strongly affects both the layerwise organization and the learning trajectories of linguistic structures, with greater parallelism induced by higher-order prediction tasks (i.e. iteratively refined pseudo-labels).

### Analyzing In-Context Learning in Speech Language Models
*Charlotte Pouw, University of Amsterdam (ILLC)*

Large language models (LLMs) trained on text corpora can learn downstream tasks from in-context examples, a capability known as in-context learning (ICL). Recently, speech language models (SpeechLMs) have extended ICL to tasks involving both speech and text, such as automatic speech recognition and text-to-speech synthesis. This raises two questions: which properties of the in-context examples matter for speech-based ICL, and what mechanisms enable it inside the model? In this talk, I will first present empirical findings on how different acoustic and linguistic properties of the in-context examples influence ICL performance. I will then show that specific attention heads (known as induction heads) play a causal role in speech-based ICL, mirroring findings in text-only models.
