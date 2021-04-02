const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

//Commands
client.on('message', msg => {
	if (msg.content === '.commands') {
		msg.reply(
			"**All you have to do is say these words. [case sensitive]** !shiba[sends image of epic shiba.],!dogRoll [sends video of a dog doing an epic roll.], !jonjonBall [sends image of Jon Jon's ball.],!badge [sends El Ollo FC's badge], !field [sends image of El Ollo FC's stadium.], !chonkShiba [sends image of a fat shiba.], !redditUser [shows image of a typical reddit user.],!popCat [its just popcat idk what to tell u], !popVibe [collab between popcat and vibecat.] "
		);
	}
});
//Text replies
client.on('message', msg => {
	if (msg.content === 'bruh') {
		msg.reply('moment');
	}
});

client.on('message', msg => {
	if (msg.content === 'coc') {
		msg.reply('shut up no one cares about coc anymore');
	}
});

client.on('message', msg => {
	if (msg.content === 'lmao') {
		msg.reply('tf is u laughing at');
	}
});

client.on('message', msg => {
	if (msg.content === '!jennynudes') {
		msg.reply('no');
	}
});

//Replies with attachments
client.on('message', msg => {
	if (msg.content === '!shiba') {
		const attachment = new MessageAttachment('https://i.imgur.com/XiyeGgN.jpg');
		msg.channel.send(attachment);
	}
});

client.on('message', msg => {
	if (msg.content === '!dogRoll') {
		const attachment = new MessageAttachment('https://i.imgur.com/IZUiEwE.mp4');
		msg.channel.send(attachment);
	}
});

client.on('message', msg => {
	if (msg.content === '!jonjonBall') {
		const attachment = new MessageAttachment('https://i.imgur.com/3jkVRx3.jpg');
		msg.channel.send(attachment);
	}
});

client.on('message', msg => {
	if (msg.content === '!badge') {
		const attachment = new MessageAttachment('https://i.imgur.com/OI4SRO6.jpg');
		msg.channel.send(attachment);
	}
});

client.on('message', msg => {
	if (msg.content === '!field') {
		const attachment = new MessageAttachment('https://i.imgur.com/70QqLsG.jpg');
		msg.channel.send(attachment);
	}
});

client.on('message', msg => {
	if (msg.content === '!chonkShiba') {
		const attachment = new MessageAttachment(
			'https://i.ytimg.com/vi/KB1WaV2xdHw/hqdefault.jpg'
		);
		msg.channel.send(attachment);
	}
});

client.on('message', msg => {
	if (msg.content === '!redditUser') {
		const attachment = new MessageAttachment(
			'https://external-preview.redd.it/Oo_rhV8aub9sY8oKIg7zqO04pESXBKvQvpfc6-0jVmA.jpg?auto=webp&s=7b8bfe3ca62bff05f567e1474435ce5ff11a8a87'
		);
		msg.channel.send(attachment);
	}
});

client.on('message', msg => {
	if (msg.content === '!popCat') {
		const attachment = new MessageAttachment('https://i.imgur.com/Y5yCBgL.mp4');
		msg.channel.send(attachment);
	}
});

client.on('message', msg => {
	if (msg.content === '!popVibe') {
		const attachment = new MessageAttachment('https://i.imgur.com/YXOAxql.mp4');
		msg.channel.send(attachment);
	}
});

client.on('message', msg => {
	if (msg.content === '!jonjon') {
		const attachment = new MessageAttachment('https://imgur.com/gallery/1AIV9oH');
		msg.channel.send(attachment);
	}
});

client.login(process.env.TOKEN);
