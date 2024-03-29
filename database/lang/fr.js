const languageData = {
    /** Errors **/
    TEAM_NOT: "Cette commande ne peut être utilisée que par un utilisateur au sein de l'équipe",
    PERMISSION_DENIED: "Vous n'avez pas la permission d'utiliser cette commande",
    MISSED_ARGUMENTS: "Vous avez oublié des arguments, réessayez s'il vous plaît.",
    MAXIMUM_VALUE: "Vous ne pouvez pas utiliser plus de 3 caractères, symboles ou lettres dans votre préfixe, par exemple `rox!` n'est pas autorisée, mais `r!` est autorisé, et vous pouvez à nouveau ajouter 1 caractère",
    HELP_UNKNOW_COMMAND: (command) => `La commande \`!${command}\` n'existe pas`,
    LANG_NOT_FOUND: (lang, langs) => "La langue `" + lang + "` n'a pas été trouvé s'il vous plaît, définissez une langue valide " + langs,
    NOT_YOURSELF: "Vous ne pouvez pas vous bannir vous mêmes",
    NOT_IMG: `Vous n'avez pas envoyé d'image, essayez à nouveau, seulement \`.png\`,\`.jpg\` and \`.jpeg\` est pris en charge pour le moment, attendez une mise à jour s'il vous plaît`,
    NOT_ARGS_LOVE: `Vous n'avez pas envoyé \`@mention 1 and you\` or \`@mention 1 and @mention 2\` or \`user and you\` or \`user 1 and user 2\``,
    NOT_GOLD_USER: "Vous n'êtes pas un utilisateur de Rox Gold\n\nSi vous voulez voir les avantages que Rox Gold pour les utilisateurs vous offre, https://doc.rox.wtf/rox-gold",
    NOT_GOLD_SERVER: "Ce serveur n'a pas Rox Gold\n\nSi vous voulez voir les avantages que Rox Gold pour les serveurs vous offre, https://doc.rox.wtf/rox-gold",
    IS_NAME_ALREADY: "Le serveur se nomme déjà à ce nom, veuillez essayer un autre",
    CHANNELS_ARGS: "Vous n'avez pas saisi de valeur valide, voici les valeurs disponibles: `logs`, `joinquit`",
    MENTION_CHANNEL: "Vous n'avez mentionné aucun salons",
    MENTION_ROLE: "Vous n'avez mentionné aucun rôle",
    ARGS_BACKGROUND: "L'argument, n'est pas valable, ceux qui existent sont `color`, `img` (et `server` pour les serveurs gold)",
    ARGS_BACKGROUND_1: "Vous devez entrer un code couleur valide, vous pouvez utiliser ce générateur: https://colors.rox.wtf",

    INVALID_ARGS_BLACKLIST: "Vous devez saisir un type de option valide, les options disponibles à configurer sont: `add` ou `remove`",
    INVALID_ARGS_XP: "Vous devez saisir un type de option valide, les options disponibles à configurer sont: `rewards` ou `status`",
    INVALID_ARGS_XP_1: "Vous devez saisir un type de option valide, les options disponibles à configurer sont: `add`, `update` ou `remove`",
    INVALID_ARGS_XP_2: "Vous devez saisir un type de option valide, les options disponibles à configurer sont: `on` ou `off`",
    INVALID_ARGS_XP_LEVEL_REMOVE: "Vous devez entrer un numéro correspondant à un niveau, pour retirer sa récompense",
    INVALID_ARGS_XP_LEVEL_ADD: "Vous devez entrer un numéro correspondant à un niveau, et une mention de rôle pour définir la récompense une fois le niveau atteint",
    INVALID_ARGS_XP_LEVEL_UPDATE: "Vous devez entrer un numéro correspondant à un niveau, et une mention de rôle pour redéfinir la récompense une fois le niveau atteint",
    XP_LEVEL_NOT_FOUND: "La récompense pour ce niveau n'existe pas, il faut d'abord l'ajouter avant de le modifier",
    XP_LEVEL_EXIST: "Une récompense est déjà associée à ce niveau, changez-la ou supprimez-la avant de faire quoi que ce soit",
    INVALID_ARGS_ROLES: "Vous devez saisir un type de rôle valide, les rôles disponibles à configurer sont: `adminRole`, `modRole` ou `autoRole`",
    INVALID_ARGS_TEXTS: "Vous devez entrer un type de texte valide, les textes disponibles à configurer sont: `joinText`, `quitText` ou `lvlUpText`",
    INVALID_ARGS_CHANNELS: "Vous devez entrer un type de d'argument valide, les arguments disponibles à configurer sont: `joinquit`, `logs`, `ticket (Nom d'une catégorie)` ou `commands`, si vous voulez dé-sélectionner un salon rajoutez `unset` avant de mettre l'option",
    INVALID_ARGS_COMMANDS: "Vous devez entrer un type d'argument valide, les arguments disponibles à configurer sont: `add`, `remove` ou `update`",
    INVALID_ARGS_TEXT_COMMANDS: "Vous n'avez pas saisi de texte que le bot enverra si la personne utilise la commande, si vous voulez avoir des messages plus cool que d'autres utilisent des balises\n\nhttps://tags.rox.wtf",
    INVALID_ARGS_TICKET: "Vous devez saisir un type de option valide, les options disponibles sont : `create`, `delete`,`add` ou `remove`",
    INVALID_ARGS_IS: "Vous devez saisir un type de option valide, les options disponibles sont : `channel` ou `network`",
    NETWORK_FULL_IS: "Ce réseau est plein, veuillez en choisir un autre",
    NETWORK_ALREADY: "Vous êtes déjà dans ce réseau !",

    COMMAND_REACHED_MAXIMUM: "Ce serveur a atteint la limite de commande personnalisée qu'il peut avoir, pour améliorer cette limite à 30 vous pouvez prendre l'abonnement Rox Gold pour ce serveur\n\nhttps://doc.rox.wtf/rox-gold",
    COMMAND_ALREADY_EXIST: (prefix, name) => `Cette commande existe déjà, vous pouvez la supprimer avec \`${prefix}commands remove ${name}\``,
    COMMAND_NOT_EXIST: (prefix, name) => `Cette commande n'existe pas, vous pouvez l'ajouter avec \`${prefix}commands add ${name} [text]\``,

    MISSED_TEXT: (prefix, type) => `Vous avez oublié(e) d'inserer un texte, vous pouvez ajoutées plusieurs tags dans votre texte, pour voir ceux qui sont disponibles pour ce texte utilisez \`${prefix}tags ${type}\``,
    MISSED_TEXTS: "Vous avez oublié(e) d'inserer un texte",
    TOO_MUCH_ARGS: "Il y a trop de caractère la limite est 12",

    INVALID_CHANNEL_COMMANDS: (id) => "Ce serveur a mis en place un salon pour l'utilisation des commandes, veuillez vous y rendre <#"+id+"> seul les membres ayant une de ces permissions `Administrateur`, `Gérer les messages`, `Gérer les salons` peuvent contourner ce système",

    CATEGORY_NAME_NFOUND: "Vous n'avez pas précisé le nom de la catégorie qui sera utilisée comme boîte aux lettres pour vos tickets",

    DELETE_IS_CHANNEL: "Pour désactiver les messages inter-serveurs vous devez supprimer le salon !",

    TOP_XP_ARGUMENTS: (prefix) => `Vous devez entrer un argument valable si vous voulez afficher le haut de cette utilisation de la guilde, utilisez \`${prefix}top\` ou si vous voulez afficher le niveau supérieur de toutes les guildes où se trouve rox ici, utilisez \`${prefix}top server\``,
    FOOTER_TOP_XP: (prefix) => `Utilisez \`${prefix}top [null/server]\` pour changer l'affichage`,
    TITLE_TOP_XP_GUILDS: `Le sommet des guildes de haut niveau`,
    TITLE_TOP_XP_USERS: `Top des utilisateurs de haut niveau de cette guilde`,
    DESCRIPTION_TOP_XP: (level, xp) => `est niveau **${level}** avec un total de **${xp}** xp`,
    DESCRIPTION_TOP_XP_U: (level, xp, messages) => `est niveau **${level}** avec un total de **${xp}** xp, avec plus de **${messages}** messages envoyés`,

    LEVEL: "Niveau",
    LEVEL_TEXT: (level) => "Vous êtes niveau: **"+level+"**",
    LEVEL_TEXT_O: (level) => "Ce membre est niveau **"+level+"**",
    XP: "XP(s)",
    XP_TEXT: (xp,maxXP) => "Vous avez: **"+xp+"**/**"+maxXP+"** xp",
    XP_TEXT_O: (xp, maxXp) => "Ce membre à **"+xp+"**/**"+maxXp+"** xp",
    MSGS_SEND: "Messages envoyé(e)s",
    MSGS_TEXT: (msgs) => "Avec plus de **"+msgs+"** messages envoyées sur le serveur depuis l'arrivé de Rox",

    /** SUCCESS **/
    UPDATED: "Vos modifications ont été sauvegardées avec succès",
    DOWNLANDED: (prefix) => `Bravo, vous avez défini votre arrière plan, pour le voir executer la commande \`${prefix}level\``,

    /** EMBED **/
    HELP_CUST_NOT: (prefix) => `Ce serveur n'a pas de commande personnalisée, pour en ajouter utilisez \`${prefix}custcmds [add/remove] [commandName] [text]\` pour ajouter ou supprimer une commande personnalisée, si vous voulez avoir un message qui sort de l'ordinaire [cliquez ici](https://doc.rox.wtf/configs/messages/tags)`,
    HELP_ADMIN_FIELD: "Administrateur",
    HELP_MOD_FIELD: "Modérateur",
    HELP_FUN_FIELD: "Fun",
    HELP_MUSIC_FIELD: "Musique",
    HELP_XP_FIELD: "Système d'XP",
    HELP_BASIC_FIELD: "Basique",
    INVITE: "ici pour invité le bot discord dans ton server",

    WARN_TITLE: "Avertissements de ",
    WARNS_REASON_FIELD: "Raison: ",
    WARNS_MOD_FIELD: "Modérateur: ",

    HELP_CC_FIELD: (serverName) => "Commandes personnalisées (**" + serverName + "**)",
    HELP_GOLD_USER_FIELD: "Avantages pour l'utilisateur Gold",
    HELP_GOLD_SERVER_FIELD: "Avantages du serveur Gold",
    HELP_DESCRIPTION: (prefix) => `<:rox:746093259432001687> Pour mieux vous aider, vous pouvez utiliser la commande \`${prefix}help [command]\` pour obtenir les usages, les arguments, la description tout ce qui peut vous aider à utiliser le bot`,

    // Moderations commands messages
    PUNISH_Y: `Vous ne pouvez pas vous punir`,
    PUNISH_BOT: `Vous ne pouvez pas me punir`,
    PU_NO_MENTION: "Veuillez entrer une mention d'utilisateur",
    PU_NO_REASON: "Veuillez indiquer une raison",
    PU_NO_ID: "Veuillez saisir une ID valide",
    PU_NO_ID_USER: (user) => `Cette ID n'est pas appropriée pour ${user}, veuillez regarder les avertissements de ${user} et voir la bonne ID`,
    PU_NO_USER: "Cet utilisateur n'existe pas dans ce serveur",
    PU_IMPOSSIBLE: "Je ne peux pas punir cet utilisateur",
    SUCCESS_BAN: (moderator,user, reason) => `${moderator} a interdit d'accéder au serveur à ${user} pour ${reason}`,
    SUCCESS_KICK: (moderator,user, reason) => `${moderator} a expulser du serveur ${user} pour ${reason}`,
    SUCCESS_WARN: (moderator,user, reason) => `${moderator} a avertit ${user} pour ${reason}`,
    SUCCESS_UNWARN: (moderator,user) => `${moderator} a retiré l'avertissement de ${user}`,
    SUCCESS_MUTE: (moderator,user, reason) => `${moderator} a mis au silence ${user} pour ${reason}`,
    SUCCESS_TMUTE: (moderator,user, reason, time) => `${moderator} à mis au silence temporairement ${user} pour ${reason} pendant ${time}`,
    SUCCESS_UNMUTE: (moderator,user) => `${moderator} a retirer la mise au silence de ${user}`,
    ALREADY_MUTE: (user) => `${user} déjà mise au silence`,
    NO_TIME: "Vous devez spécifier des chiffres, et non des lettres.",
    NO_MUTE: (user) => `${user} n'est actuellement pas réduite au silence`,

    BLACKLISTED: "Désolé, mais je ne peux pas vous laisser utiliser le bot. Vous êtes sur liste noire.",
    PICTURE_NOT_ALLOWED: `Votre photo n'est pas autorisée, veuillez choisir une autre`,
    CHECK_PICTURE: "Soyez patients, nous vérifions l'image",

    // FUN
    CHOICE_PROGRESS: "Je suis entrain de choisir... hmm est difficile",
    CHOICE_DONE: "Je réponds...",
    DOOR_OPEN: "3ème porte à gauche, au fond tu couloir, c'est la sortie",
    DOOR_TEAM_NOT: "Tu ne peut pas faire sortir un membre de l'équipe du développement de Rox, sinon il n'y aura plus de nouveautées :-|",
    KISS: (user1, user2) => `${user2}, ${user1} t'embrasse`,
    HUG: (user1, user2) => `${user2}, ${user1} te fait un calin`,
    PUNCH: (user1, user2) => `${user2}, ${user1} te donne un coup de poing`,

    // SERVER
    LEVEL_SERVER_UP: (prefix) => `Niveau supérieur du serveur, vous pouvez voir le niveau du serveur avec \`${prefix}server\`, utilisez \`${prefix}server top\` pour voir votre niveau par rapport aux autres serveurs utilisant Rox`,

    // 8BALL
    DESCRIPTION: "Je vous dis la vérité!",
    ERR_QUESTION: "Vous devez entrer une question à me poser!",
    RESPONSE_1: "J'en suis certain.",
    RESPONSE_2: "C'est définitivement sûr.",
    RESPONSE_3: "Oui, définitivement.",
    RESPONSE_4: "Mieux vaut ne pas vous le dire maintenant.",
    RESPONSE_5: "Demandez moi cela plus tard.",
    RESPONSE_6: "N'y comptez pas.",
    RESPONSE_7: "Je ne le pense pas.",
    RESPONSE_8: "Mes sources disent que non.",
    RESPONSE_9: "Non.",
    RESPONSE_10: "Les perspectives ne sont pas si bonnes.",

    // TEAM
    BLACKLIST_ADD: "Tu as ajouté ce membre dans la blacklist",
    BLACKLIST_REMOVE: "Tu as supprimé ce membre de la blacklist",

    // EMBED CONF
    INVALID_ARGUMENT_EMBECONF: "Vous devez entrer un type d'option valide, l'option disponible à configurer est: `config` ou `status`",
    INVALID_ARGUMENT_EMBECONF_1: "Vous devez entrer un type d'option valide, l'option disponible à configurer est: `on` ou `off`",
    INVALID_ARGUMENT_EMBECONF_0: "Vous devez entrer un type d'option valide, l'option disponible à configurer est: `title`, `color` ou `imgUrl`",
    IMG_URL_DISABLE: (prefix) => `Pour désactiver l'image faite la commande \`${prefix}embed config imgUrl\` sans texte à la suite`,
    IMG_TITLE_DISABLE: (prefix) => `Pour désactiver le titre faite la commande \`${prefix}embed config title\` sans texte à la suite`,

    // MUSIC
    MUSIC_NO_VOICE: "Tu n'es pas dans un canal vocal",
    MUSC_ALREADY_CONNECTED: "Je suis déjà connecté à un canal vocal",
    MUSC_NOT_CONNECTED: "Je ne suis pas connecté à un canal vocal",
    MUSIC_NO_ARGS: "Veuillez entrer un lien valide vers une vidéo Youtube ou effectuer une recherche",
    MUSIC_NO_QUEUE: (name) => "**" + name + "** n'ont pas de musiques en attente",
    MUSIC_NO_QUEUE_NUMBER: (name, number) => "**" + name + "** n'ont pas de musiques en attente **" + number + "**",
    MUSIC_LEAVE_CHANNEL: (name) => "Je quitte le canal **" + name + "**",
    MUSIC_NOT_SAME_CHANNEL: "Si vous voulez arrêter la musique, connectez-vous dans le même canal où se trouve le bot",
    MUSIC_QUEUE_ADD: (name, username) => "J'ai ajouté à la file d'attente `" + name + "` demandé par **" + username + "**",
    MUSIC_CHANGE: (name, username) => "Je joue `" + name + "` demandé par **" + username + "**",
    MUSIC_NOW_PLAY: "En cours de lecture",
    MUSIC_REQUEST: "Demandé par",
    MUSIC_QUEUE: "En attente",
    MUSIC_SKIP_VOTE_AV: (requi) => "Vous avez déjà voté pour sauter, " + requi + " vote obligatoire pour sauter la chanson",
    MUSIC_VOTE_SKIP_VOTED: (requi) => "Vous avez voté avec succès pour un saut de musique, " + requi + " vote obligatoire pour sauter la chanson",
    MUSIC_SKIP: "Je saute la chanson !",
    MUSIC_VOLUME_LIMIT: "Veuillez donner un nombre supérieur à 0 et inférieur à 500",
    MUSIC_VOLUME_SET: (volume, songName) => "Vous avez réglé le volume sur **" + volume + "** à la chanson `" + songName + "`",
    MUSIC_CHOOSE: "Envoyez le numéro que vous souhaitez pour choisir votre musique",
    MUSIC_PAUSE: (prefix, name) => "A réussi à mettre la musique en pause, à utiliser " + `${prefix}resume` + " pour reprendre la musique",
    MUSIC_ALREADY_PAUSE: (prefix, name) => "Cette musique est déjà en pause, utilisez " + `${prefix}resume` + " pour reprendre la musique",
    MUSIC_RESUME: (prefix, name) => "Reprenez la musique avec succès, utilisez " + `${prefix}pause` + " pour mettre la musique en pause",
    MUSIC_ALREADY_RESUME: (prefix, name) => "This music is already in playing, use " + `${prefix}pause` + " to pause the music",

    // TICKET
    ALREADY_CHANNEL: "Vous avez déjà un ticket ouvert",
    CREATE_CHANNEL: "Vous venez d'ouvrir un ticket",
    NOT_EXISTS_CHANNEL_MOD: "Le channel n'existe pas veuillez entrée l'id du channel ou son nom",
    NOT_EXISTS_CHANNEL: "Vous n'avez pas de ticket ouvert",
    DELETE_CHANNEL: "Vous venez de fermer votre ticket",

    // INTER SERVER
    IS_CHOOSE_SERVER: (prefix, n1, n1p,n2, n2p,n3, n3p,n4, n4p,n5, n5p,n6, n6p,n7, n7p,n8, n8p,n9, n9p,n10, n10p) => "Voici la liste des réseaux disponibles pour l'interserver:\n" +
        `\`1\`: **${n1}**/**5** avec un ping de ${n1p}ms :flag_fr:\n` +
        `\`2\`: **${n2}**/**5** avec un ping de ${n2p}ms :flag_fr:\n` +
        `\`3\`: **${n3}**/**5** avec un ping de ${n3p}ms :flag_de:\n` +
        `\`4\`: **${n4}**/**5** avec un ping de ${n4p}ms :flag_de:\n` +
        `\`5\`: **${n5}**/**5** avec un ping de ${n5p}ms :flag_de:\n` +
        `\`6\`: **${n6}**/**5** avec un ping de ${n6p}ms :flag_fr:\n` +
        `\`7\`: **${n7}**/**5** avec un ping de ${n7p}ms :flag_us:\n` +
        `\`8\`: **${n8}**/**5** avec un ping de ${n8p}ms :flag_be:\n` +
        `\`9\`: **${n9}**/**5** avec un ping de ${n9p}ms :flag_us:\n` +
        `\`10\`: **${n10}**/**5** avec un ping de ${n10p} :flag_us:` +
        `\n\nChoisissez un réseau avec \`${prefix}interserver network [ID]\``,

    IS_INFO_LINE_TITLE: "__Comment fonctionne l'interserver ?__",
    IS_INFO_LINE_1: "- Pour commencer vous devez définir le salon qui sera le point de discussion avec `!is channel [channel]` remplacez `[channel]` par une mention de salon !",
    IS_INFO_LINE_2: "- Pour ne pas avoir des problèmes avec les limites de l'api, il y a en place un système de \"réseaux\", chaque serveur sera sur un nombre, chaque groupe sera limité à 5 serveurs maximum, **a expliquer plus tard**",
    IS_INFO_LINE_3: "- Par défaut tout les messages reçu restera dans la langue à la quel sera envoyé, si vous voulez changer cela exécutez la commande `!is lang [fr/en/es/auto]`",
    IS_INFO_LINE_LANG_FR: "× `fra`: Les messages seront traduits en Français",
    IS_INFO_LINE_LANG_EN: "× `en`: Les messages seront traduits en Anglais",
    IS_INFO_LINE_LANG_SP: "× `sp`: Les messages seront traduits en Espagnol",
    IS_INFO_LINE_LANG_AU: "× `auto`: Les messages ne seront pas traduit, ils resteront comme ils le sont",

    // ADVENTURE
    ADV_GEMS: "gemmes dans le sac à dos",
    ADV_BANK: (prefix) => ` gemmes en banque \`(${prefix}adv_bank)\``,

    ADV_ENERGY: "d'Énergie",

    ADV_BANK_TYPE_1: "Cuir",
    ADV_BANK_TYPE_2: "Argent",
    ADV_BANK_TYPE_3: "Diamant",

    ADV_INV_FIELD_PROFIL: "Profil de Jeu",
    ADV_INV_FIELD_STATS: "Statistiques",
    ADV_INV_FIELD_INFOS: "Informations",
    ADV_INV_FIELD_ITEMS: "Objets",
    ADV_INV_FIELD_ORES: "Ressources",
    ADV_INV_FIELD_FOODS: "Consommables",
    ADV_BANK_FIELD_NOT: "Prix des comptes",
    ADV_BANK_FIELD_HAVE: "Votre compte",

    ADV_STONE: "pierre",
    ADV_GOLD: "or",
    ADV_IRON: "fer",
    ADV_OBSIDIAN: "obsidienne",
    ADV_GEMS_0: "gemmes",
    ADV_WOOD: "bois",

    ADV_MINE: (count, type, emoji) => `Vous avez miner \`x${count}\` de \`${type}\` ${emoji}`,
    ADV_AXED: (count, type, emoji) => `Vous avez bûcher \`x${count}\` de \`${type}\` ${emoji}`,

    ADV_MINER_HELMET_LEVEL: (level) => `Votre casque de mineur est niveau \`${level}\``,
    ADV_MINER_HELMET_NOT: (prefix) => `Aucun casque de mineur \`(${prefix}adv_helmet)\``,

    ADV_RING_LEVEL: (level) => `Votre anneau est de niveau \`${level}\``,
    ADV_RING_NOT: (prefix) => `Vous n'avez pas d'anneau \`(${prefix}adv_ring)\``,

    ADV_PICKAXE_LEVEL: (level) => `Votre pioche est niveau \`${level}\``,
    ADV_PICKAXE_DESCRIPTION: (level) => `(<:pickaxe:746096695066230815>) __Pioche__:\n- Utilité: Permet d'améliorer la chance d'obtenir des gemmes en minant\n\n- Niveaux:\n\n`+
        `• **1**: Chance de **10%** d'obtenir une gemme\n`+
        `• **2**: Chance de **25%** d'obtenir une gemme (Coût de fabrication: 5.000<:iron:746093114996817920> , 500<:gold:746093115265384622>)\n`+
        `• **3**: Chance de **50%** d'obtenir une gemme (Coût de fabrication: 25.000<:iron:746093114996817920> , 2.500<:gold:746093115265384622>, 3 energy)\n`+
        `• **4**: Chance de **85%** d'obtenir une gemme (Coût de fabrication: 50.000<:iron:746093114996817920> , 5.000<:gold:746093115265384622>)\n`+
        `• **5**: Chance de **100%** pour obtenir une gemme (Coût de fabrication: 100.000<:iron:746093114996817920> , 10.000<:gold:746093115265384622>, 4 energy)\n\n`+
        "\n\n" + `__Votre pioche__ est de niveau **${level}**`,
    ADV_PICKAXE_NOT: (prefix) => `Vous n'avez pas de pioche \`(${prefix}adv_pick)\``,

    ADV_AXE_LEVEL: (level) => `Votre hache est niveau \`${level}\``,
    ADV_AXE_DESCRIPTION: (level) => `(<:axe1:746093114996949104>) __Hache__:\n- Utilité: Permet d'avoir une chance de doubler le bois bûcher\n\n- Niveaux:\n\n`+
        `• **1**: Chance de **10%** d'obtenir le double de bois\n`+
        `• **2**: Chance de **25%** d'obtenir le double de bois (Coût de fabrication: 100<:iron:746093114996817920> , 200<:gold:746093115265384622>)\n`+
        `• **3**: Chance de **50%** d'obtenir le double de bois (Coût de fabrication: 500<:iron:746093114996817920> , 300<:gold:746093115265384622>, 1 d'énergie)\n`+
        `• **4**: Chance de **85%** d'obtenir le double de bois (Coût de fabrication: 1.000<:iron:746093114996817920> , 600<:gold:746093115265384622>)\n`+
        `• **5**: Chance de **100%** d'obtenir le double de bois (Coût de fabrication: 2.500<:iron:746093114996817920> , 1.000<:gold:746093115265384622>, 3 d'énergie)\n\n`+
        "\n\n" + `__Votre hache__ est de niveau **${level}**`,
    ADV_AXE_NOT: (prefix) => `Vous n'avez pas de hache \`(${prefix}adv_axe)\``,

    ADV_GEMS_NOT: (gems) => "Vous n'avez pas assez de gemmes, il vous en manque un total de `" + gems + "`",

    ADV_BACKPACK_LEVEL_UP: (nLvl, nItem, prefix) => `Vous avez améliorer votre sac à dos au niveau \`${nLvl}\` vous pouvez maintenant contenir un maximum de \`${nItem}\` items\n\n- N'oubliez pas que pour liberez du stockage vous pouvez envoyer vos gemmes dans la banque avec la commande \`${prefix}adv_bank deposit [count]\``,
    ADV_BANK_LEVEL_UP: (nLvl, nItem) => `Vous avez améliorer votre compte au niveau \`${nLvl}\` vous pouvez maintenant contenir un maximum de \`${nItem}\` gemmes`,

    ADV_NOT_IN: (prefix) => `Vous n'avez pas commencé une aventure, pour en débuter une, utilisez \`${prefix}adv start\``,
    ADV_NOT_IN_0: `Ce membre n'a pas commencé d'aventure`,
    ADV_USER_NOT_GEM: `Ce membre n'a pas de gemmes sur lui`,

    ADV_ROBBED: (gems, username) => `Vous venez de voler \`${gems}\` gemmes à \`${username}\`, vous devez maintenant patienter \`24 heures\` avant de re-voler un membre`,

    ADV_ROB_MEMBER_TITLE: "Voler un membre",
    ADV_ROB_COOLDOWN: "Veuillez patienter un jour pour re-voler un membre",

    ADV_INVENTORY_TITLE: "Inventaire de ",
    ADV_BANK_TITLE: "Banque de ",
    ADV_INVENTORY_DESCRIPTION: (level, maxItems, prefix) => `Le sac à dos est de niveau \`${level}\`, l'inventaire peut donc contenir jusqu'à \`${maxItems}\` items dans le sac à dos, l'inventaire peut être améliorer avec \`${prefix}adv_inv upg\``,
    ADV_BACKPACK_MAX: (level, maxItems, prefix) => `Votre inventaire est de niveau \`${level}\` vous pouvez contenir jusqu'à \`${maxItems}\` items dans votre inventaire\n\n- N'oubliez pas que pour liberez du stockage vous pouvez envoyer vos gemmes dans la banque avec la commande \`${prefix}adv_bank deposit [count]\``,
    ADV_BACKPACK_UP: (level, maxNItems, price, prefix) => `Votre inventaire est de niveau \`${level}\` améliorez le avec \`${prefix}adv_backpack upg\` pour avoir un maximum de \`${maxNItems}\` d'items disponible\n\nCoût de l'amélioration: \`${price}\` gemmes`,
    ADV_BACKPACK_FULL: "Votre sac à dos est plein !",
    ADV_INVENTORY_ORES: (wood, stone, iron, gold, obsidian) => `<:wood:746093053068050504> Bois: \`${wood}\`\n` +
        `<:stone:746093115202338867> Pierre: \`${stone}\`\n` +
        `<:iron:746093114996817920> Fer: \`${iron}\`\n`+
        `<:gold:746093115265384622> Or: \`${gold}\`\n`+
        `<:obsidian:746097330276794369> Obsidienne: \`${obsidian}\`\n`,
    ADV_INVENTORY_FOODS: (bread) => `<:bread1:746155191715364976> Pain: \`${bread}\``,

    ADV_GEMS_NOT_ENOUGH_BANK: "Votre compte ne dispose pas de suffisamment de gemmes pour prendre le montant de votre demande",
    ADV_GEMS_NOT_ENOUGH: "Vous n'avez pas assez de gemmes pour envoyer le montant que vous avez noter",
    ADV_BANK_NOT_ENOUGH: (max, prefix) => `Votre compte n'est pas assez développer pour contenir plus de \`${max}\` gemmes, améliorer le avec la commande \`${prefix}adv_bank upg\``,

    ADV_TAKE_SUCCESS: (gems) => `Vous venez de retirer \`${gems}\` gemmes de votre compte, veuillez attendre 10 minutes avant votre prochain transfert`,
    ADV_TRANSFER_SUCCESS: (gems) => `Vous avez maintenant \`${gems}\` gemmes sur votre compte bancaire, attendez 10 minutes avant d'effectuer votre prochain transfert.`,
    ADV_TRANSFER_SUCCESS_0: (gems) => `Vous avez maintenant \`${gems}\` gemmes dans votre sac à dos, attendez 10 minutes avant d'effectuer votre prochain transfert.`,

    ADV_SELLED: (c, emoji) => `Vous venez de vendre \`x${c}\`${emoji}`,
    ADV_BUYED: (c, emoji) => `Vous venez d'acheter \`x${c}\`${emoji}`,
    ADV_ITEMS_SELL: "Voici les items que vous pouvez vendre, `wood`, `stone`, `iron`, `gold`, `obsidian`",
    ADV_ITEMS_BUY: "Voici les items que vous pouvez acheter, \nResources: `wood`, `stone`, `iron`, `gold`, `obsidian`",

    ADV_NOT_HAVE_TO_SELL: (count) => `Vous n'avez pas assez de resources pour en vendre \`x${count}\``,
    ADV_NOT_HAVE_TO_BUY: (count) => `Vous n'avez pas assez de gemmes pour acheter \`x${count}\` de cette ressources`,

    ADV_SHOP_USE: (prefix) => `Pour \`[acheter/vendre]\` vous devez utilisez: \`${prefix}[buy/sell] [type] [count]\``,

    ADV_ITEMS_INFO: (name, util, fab) => `__Informations de **${name}**__\n__Utilité__: ${util}\n\n__Coût de fabrication__: ${fab}`,

    ADV_BANK_DESCRIPTION: `Bienvenue dans la banque, stockez vos gemmes, pour liberez du stockage dans votre sac à dos, ainsi d'avoir moins de Chance de se faire voler vos gemmes !`,
    ADV_BANK_NOT: `Vous n'avez pas de compte banquaire, voici les prix:\n\n- Compte cuir: \`500\` <:gems:746098225785864263>, pour un stockage de cent mille gemmes\n- Compte argent: \`1.000\` <:gems:746098225785864263>, pour un stockage d'un million de gemmes maximum\n- Compte diamant: \`5.000\` <:gems:746098225785864263>, pour un stockage de dix millions de gemmes maximum`,
    ADV_BANK_BUY: (gems, prefix) => `Merci, vous pouvez des à présent stocker juqu'à ${gems} dans votre banque, si vous voulez améliorer votre type de compte utliser \`${prefix}adv_bank upg\``,
    ADV_BANK_ACCOUNT: (gems, max, type, rest) => `Votre compte bancaire est de type \`${type}\` et contient \`${gems}\` gemmes, sur un maximum de \`${max}\`\n\n- Vous pouvez donc encore stocker un total de \`${rest}\` gemme(s)`,

    ADV_BREAD_NOT: "Vous n'avez pas de pain pour régénérer votre énergie, vous pouvez en obtenir en ouvrant des boîtes quotidiennes",
    ADV_BREADED: "Vous avez consumer un pain, vous venez de récuperer `5` <:energy:746093115043086336>",
    ADV_BREADED_MAX: "Vous avez déjà `50` <:energy:746093115043086336>, vous ne pouvez pas en avoir plus",

    MAX: "Cette action n'est pas possible, cette objet est déjà niveau maximum",
    ENERGY_NULL: "Vous n'avez pas l'énergie nécessaire pour continuer vos actions, allez faire autre chose pendant que votre énergie se rétablit",

    ADV_UPGRADED: (n) => `Bien joué ! cette item est passé niveau \`${n}\` avec cette amélioration`,
    ADV_RESSOURCE_MISSING: (count, emoji) => `Vous manquez de \`${count}\` ${emoji}`,
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;