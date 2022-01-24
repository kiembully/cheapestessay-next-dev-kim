// header links

export const data = [
    { url: `${process.env.hostBaseUrl}/how-it-works`, link: "How it Works" },
    { url: `${process.env.hostBaseUrl}/about-us`, link: "About us" },
    {
        url: `${process.env.hostBaseUrl}/services`, link: "Services", ismore: true,
        subLink: [
            { link: "Custom Essay", url: `${process.env.hostBaseUrl}/custom-essay` },
            { link: "Research Paper", url: `${process.env.hostBaseUrl}/research-paper-writing-services` },
            { link: "Case Study", url: `${process.env.hostBaseUrl}/case-study-writing` },
            { link: "Course Work", url: `${process.env.hostBaseUrl}/coursework-writing-services` },
            { link: "Assignment", url: `${process.env.hostBaseUrl}/assignment-writing-service` },
            { link: "Dissertation", url: `${process.env.hostBaseUrl}/dissertation-help` }
        ]
    },
    { url: `${process.env.hostBaseUrl}/reviews`, link: "Reviews" },
    { url: "https://blog.cheapestessay.com/", link: "Blog" },
    { url: `${process.env.hostBaseUrl}/price`, link: "Pricing" },
    { link: "More..", ismore: true, subLink: [{ link: "Top Writer", url: `${process.env.hostBaseUrl}/top-writers` }, { link: "Contact Us", url: `${process.env.hostBaseUrl}/contact-us` }] },
]

export const serviceLinks = [
    { link: "Custom Essay", href: `${process.env.hostBaseUrl}/custom-essay` },
    { link: "Research Paper", href: `${process.env.hostBaseUrl}/research-paper-writing-services` },
    { link: "Case Study", href: `${process.env.hostBaseUrl}/case-study-writing` },
    { link: "Course Work", href: `${process.env.hostBaseUrl}/coursework-writing-services` },
    { link: "Assignment", href: `${process.env.hostBaseUrl}/assignment-writing-service` },
    { link: "Dissertation", href: `${process.env.hostBaseUrl}/dissertation-help` },
]