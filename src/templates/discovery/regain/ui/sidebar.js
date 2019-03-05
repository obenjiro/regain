discovery.view.define("sidebar", {
    view: "list",
    data: `
      files()
    `,
    item: [
      {
        view: "ul",
        item: ['link:{ href: "#file:" + path, text: path }']
      }
    ]
});
