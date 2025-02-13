import { configDotenv } from 'dotenv';
configDotenv();

import { REST, Routes, ApplicationCommandOptionType } from 'discord.js';

const commands = [
    {
        name: "ask",
        description: "Asks a question stella",
        options: [
            {
                name: 'question',
                description: 'ask a question',
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

( async () =>{
    try {
        console.log('Started refreshing application (/) commands.');
    
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    
        console.log('Successfully reloaded application (/) commands.');
    }
    catch (error) {
        console.error(error);
    }
})();