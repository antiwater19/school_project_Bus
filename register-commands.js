const Conco = require('./Config.json');
const { REST, Routes } = require('discord.js');


const commands=[
    {
        name: 'hey',
        description: 'Replies with hey!',
    },
];

const rest = new REST({ version: '10'}).setToken(Conco.token);

(async()=>{
    try{
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommand(
                
            )
        )
    }
})