## What is this and what's it do?
It's the source code for a chrome extension that improves eDimension.

Specifically, it currently does 3 things, currently.
1. Add download buttons to all files/documents (so you don't have to keep)
2. Add download button for folders (recursively downloads content of subfolders too)
3. Makes eDimension look *better*.

[Even More Dimension chrome extension](https://chrome.google.com/webstore/detail/even-more-dimension/defapkcdijpdlejlkhbkklbnmcpcpijm)

## Why make this?
We're a tech and design school, and our LMS doesn't fit in. It's archaic, ugly and the experience of using it just isn't great. This is an attempt to make it better.

## Future feature plans?
[x] Add recursive download button to download the entire week's documents all at once.

[x] Add 'download all' button to each page

[ ] Semantic filenames when downloading. I hate it when PDFs are hard to identify (e.g. 154389341.pdf instead of HW1.pdf) **Note: Arjun is on this**

[ ] Better download icons. The stylistic inconsistency is grating.


## Why is Google Analytics in there?
Yeah, I debated about this for a while because I'm worried people don't fully understand just how anonymous it is. But to be honest it's completely anonymous so I will never know that it's you downloading those crazy, crazy things on eDimension.

The reason I added it (and fret no, your particular privacy is not even a little compromised), is because I'd like some stats to show the school officially that these features (downloading folders etc) are useful for students. And hopefully get them to officially recommend the chrome extension, or (best case) get a better LMS.

## How Can I Help?
Any way you want.
* Make issues for bugs/suggestions
* Make pull requests
* If you're uncomfortable with GitHub, email me at {myusername}@gmail.com

Should you choose to make a pull request and are changing up the styling, here's some info you might need.

I built this with [Sass](http://sass-lang.com/), and I've included a compilation watch task. Here's how you use it.

1. Make sure npm is installed (it should be if you have Node.js installed)
2. Open up a terminal
3. Run `npm i && gulp watch`

That's it. The CSS should auto-compile. I'm gonna modularize the JS too, so running gulp will eventually be necessary for that as well.


# **LET'S MAKE EDIMENSION A BETTER PLACE**
Yustynn.
