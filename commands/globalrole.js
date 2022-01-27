const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("globalrole")
    .setDescription("Admin: Give everyone in the server a role")
    .addRoleOption((option) =>
      option
        .setName("role-given")
        .setDescription("Role to give to required role")
        .setRequired(true)
    )
    .addRoleOption((option) =>
      option
        .setName("role-require")
        .setDescription("Role required to get role")
        .setRequired(true)
    ),
  async execute(interaction) {
    if (interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      console.log("This member is an admin");
      const role = interaction.options.getRole("role-given");

      // interaction.guild.members.cache
      //   .filter((m) => !m.user.bot)
      //   .forEach((member) => {
      //     console.log(member.user.username);
      //     // member.roles.add(role);
      //   });

      console.log(interaction.guild);

      // interaction.member.roles.add(role);

      await interaction.reply({
        content: `Command was run, everyone now is a ${role}`,
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: `Command failed: You are not an admin!`,
        ephemeral: true,
      });
    }
  },
};
