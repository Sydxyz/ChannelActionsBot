import { MyContext } from "../core/types.ts";
import { addUser } from "../database/usersDb.ts";
import { Composer, InlineKeyboard } from "grammy/mod.ts";

const composer = new Composer<MyContext>();

composer
  .command("start", async (ctx) => {
    if (ctx.chat.type != "private" && ctx.match == "group") {
      await ctx.reply("Continue setting me up in PM!", {
        reply_markup: new InlineKeyboard().url(
          "Continue",
          `https://t.me/${ctx.me.username}`,
        ),
      });
      return;
    }
    if (ctx.chat.type != "private") return;
    await ctx.reply(ctx.t("start-msg", { user: ctx.from!.first_name }), {
      parse_mode: "HTML",
      reply_markup: new InlineKeyboard()
        .url("✚✖ Δᴅᴅ MΞ T𝕠 Y̲ᴏʊʀ CʜᴀΓ ✖✚","http://t.me/instant_approval_bot?startgroup=true").row()
        .text(ctx.t("usage-help"), "helper")
        .text("."),"settsyd")
        .text("🪩 Language 🌐", "setLang").row()
        .url("Mᴏᴠɪᴇꜱ 🎠", "https://t.me/mod_moviezx")
        
        .url(ctx.t("updates"), "https://t.me/Bot_cracker").row()
        .text(ctx.t("mrsyd"), "syd"),
      disable_web_page_preview: true,
    });
    await addUser(ctx.from!.id);
  });

composer.callbackQuery("mainMenu", async (ctx) => {
  await ctx.editMessageText(
    ctx.t("start-msg", { user: ctx.from!.first_name }),
    {
      parse_mode: "HTML",
      reply_markup: new InlineKeyboard()
        .url("✚✖ Δᴅᴅ MΞ T𝕠 Y̲ᴏʊʀ CʜᴀΓ ✖✚","http://t.me/instant_approval_bot?startgroup=true").row()

        .text(ctx.t("usage-help"), "helper")
        .text("."),"settsyd")
        .text("🪩 Lᴀɴɢᴜᴀɢᴇꜱ 🌐", "setLang").row()
        .url("Mᴏᴠɪᴇꜱ 🎠", "https://t.me/Mod_Moviezx")
        .url(ctx.t("updates"), "https://t.me/Bot_cracker").row()

        .text(ctx.t("mrsyd"), "syd"),

      disable_web_page_preview: true,


    },
  );
});
  composer.callbackQuery("syd", async (ctx) => {

  await ctx.editMessageText(

    ctx.t("demo-syd", { user: ctx.from!.first_name }),

    {

      parse_mode: "HTML",

      reply_markup: new InlineKeyboard()
        .url("1️⃣","https://t.me/+3-nuV_9INIg0MDY1")
        .url("2️⃣","https://t.me/+1GiwZYm-VxBmZDI1")
        .url("3️⃣","https://t.me/+xZCVpuLGT844ODJl")
        .url("4️⃣","https://t.me/+1vSnZkShcQIyOGJl").row()
        .text(ctx.t("usage-help"), "helper")

        .text("🪩 Lᴀɴɢᴜᴀɢᴇ 🌐", "setLang").row()
        .text("G◎ ʙᴀᴄᴋ ","mainMenu")
       

        .url(ctx.t("updates"), "https://t.me/bot_cracker"),

      disable_web_page_preview: true,

    },

  );

});
   composer.callbackQuery("settsyd", async (ctx) => {
  await ctx.editMessageText(
    ctx.t("sett-syd"),

    {
      parse_mode: "HTML",
      reply_markup: new InlineKeyboard()
        .text("G◎ ʙᴀᴄᴋ ","mainMenu"
        .url(ctx.t("updates"), "https://t.me/bot_cracker"),
      disable_web_page_preview: true,
    },
  );
});

export default composer;
