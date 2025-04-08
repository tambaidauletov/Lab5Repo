
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const apiKey = ''; 

app.post('/summarize', async (req, res) => {
    const prompt = req.body.prompt;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 800,
                temperature: 0.7
            })
        });

        const data = await response.json();
        console.log('OpenAI Response:', JSON.stringify(data, null, 2));

        if (data.choices && data.choices.length > 0) {
            res.json({ summary: data.choices[0].message.content });
        } else {
            res.status(500).json({ error: 'Invalid response from OpenAI API.' });
        }


    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred while summarizing.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
