
import { MyContext } from "../core/types.ts";

import { Composer, InlineKeyboard, Keyboard } from "grammy/mod.ts";

const composer = new Composer<MyContext>();

composer.callbackQuery("heper", async (ctx) => {
  try {
    await ctx.editMessageText(
      ctx.t("help") +
        "\n\nTo approve members who are already in waiting list, upgrade to premium! Contact @xditya_bot for information on pricing.",
      {
        reply_markup: new InlineKeyboard()
          .text("Add me to your channel", "add_to_channel")
          .text("Add me to your group", "add_to_group")
          .row()
          .text(
            "Main Menu 📭",
            "mainMenu",
          ),
        parse_mode: "HTML",
      },
    );
  } catch (err) {
    console.log(err);
  }
});
