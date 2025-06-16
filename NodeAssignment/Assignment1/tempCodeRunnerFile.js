// Start server on IP 127.0.0.2 and port 8123
server.listen(8123, '127.0.0.2', () => {
  console.log('✅ Server running at http://127.0.0.2:8123');
});