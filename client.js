const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    provider: this.config.provider,
    model: this.config.model,
    prompt,
    studyContext: this.config.studyContext
  })
});

const data = await response.json();
if (!response.ok) throw new Error(data.error || 'Chat request failed');
return data.reply;
