import Mock from 'mockjs';

Mock.mock('/api/pubinfo.json', {
    code: 0,
    msg: "",
    data: [
        {
            "foo": "Hello",
            "nested": {
                "a": {
                    "b": {
                        "c": "Mock.js"
                    }
                }
            },
            "absolutePath": "@/foo @/nested/a/b/c"
        }
    ]

})

