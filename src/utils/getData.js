JSON.stringify({
  createdAt: document.querySelector("#content > div > div.col_main > div.col_right > div > div.sb2_main.layout_txtcontent.common_mbottom > div.layout_txtcontent_info").innerText.split('：')[1].split(' ')[0],
  author: document.querySelector("#content > div > div.col_main > div.col_right > div > div.sb2_main.layout_txtcontent.common_mbottom > div.layout_txtcontent_info").innerText.split('：')[2].split(' ')[0],
  count: document.querySelector("#content > div > div.col_main > div.col_right > div > div.sb2_main.layout_txtcontent.common_mbottom > div.layout_txtcontent_info").innerText.split(': ')[3],
  title: document.querySelector("#content > div > div.col_main > div.col_right > div > div.sb2_main.layout_txtcontent.common_mbottom > div.layout_txtcontent_title").innerText,
  content: document.querySelector("#content > div > div.col_main > div.col_right > div > div.sb2_main.layout_txtcontent.common_mbottom > div.layout_txtcontent_content").innerHTML
})