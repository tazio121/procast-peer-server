// server.js 🔌 PeerJS Cloud Server for ProCast

const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/procast',
  allow_discovery: true
});

console.log('🚀 PeerJS Server running at path /procast');