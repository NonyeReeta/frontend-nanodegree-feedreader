$(
  (function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe("RSS Feeds", function () {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it("are defined", function () {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });
      /* looping through each feed in allFeeds to ensure its has a url defined and the url is not empty */
      it("url is defined", function () {
        allFeeds.forEach(function (feed) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        });
      });
      /* looping through each feed in allFeeds to ensure its has a name defined and the name is not empty */
      it("name is defined", function () {
        allFeeds.forEach(function (feed) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        });
      });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function () {
      // ensuring the menu element is defined by default
      it("element is hidden by default", function () {
        const body = $("body");
        expect(body.hasClass("menu-hidden")).toBe(true);
      });

      // test to ensure the menu displays when menu icon is clicked and hides when clicked again
      it("menu changes visibility", function () {
        const menu = $("a.menu-icon-link");
        menu.click();
        expect($("body").hasClass("menu-hidden")).toBe(false);
        menu.click();
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function () {
      // Test to ensure the loadFeed function is called and completes its work
      beforeEach(function (done) {
        loadFeed(0, done);
      });
      // Test to ensure the feed loads with an initial entry
      it("load feed with atleast a single entry", function () {
        expect($(".entry")).not.toBe("");
      });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed", function () {
      let oldFeed, newFeed;
      // Test to ensure that loadFeed function changes the initial content
      beforeEach(function (done) {
        loadFeed(0, function () {
          oldFeed = document.querySelector(".feed").innerHTML;
          loadFeed(1, function () {
            newFeed = document.querySelector(".feed").innerHTML;
            it("load feed changes the content", function () {
              expect(oldFeed).not.toEqual(newFeed);
            });
            done();
          });
        });
      });
    });
  })()
);
