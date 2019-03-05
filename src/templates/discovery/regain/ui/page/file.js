discovery.page.define(
    "file",
    {
        view: "context",
        data: "..children.pick(<(path=#.id)>)",
        content: {
            view: "switch",
            content: [
                {
                    when: "no $",
                    content: 'alert-warning:"File not found: " + #.id'
                },
                {
                    content: [
                        "h1:name",
                        "h3:'source'",
                        {
                            view: 'source',
                            data: '({ content: content, syntax: "javascript" })'
                        }
                    ]
                }
            ]
        }
    },
    {
        resolveLink: "file"
    }
);
