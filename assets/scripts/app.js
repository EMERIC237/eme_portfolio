const Portfolio = (function () {
  function makeWords() {
    var words = [
      {
        text: "Object Oriented Programming",
        weight: 12.3,
      },
      {
        text: "css3",
        weight: 8,
      },
      {
        text: "javascript",
        weight: 14,
      },
      {
        text: "jquery",
        weight: 3,
      },
      {
        text: "programming",
        weight: 7,
      },
      {
        text: "python",
        weight: 10,
      },
      {
        text: "java",
        weight: 9,
      },
      {
        text: "Bootstrap",
        weight: 15,
      },
      {
        text: "PostgreSQL",
        weight: 7,
      },
    ];
    return words;
  }

  function makeWordCloud(words) {
    $(".teaching-domains").jQCloud(words, { delay: 120 });
  }

  function displayWordCloud() {
    var count = 1;
    $(window).on("scroll", function () {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 2700; // set to whatever you want it to be
      var words = makeWords();
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words);
        count++;
      }
    });
  }

  function designForm() {
    $("#my-modal form").addClass("my-form");
  }

  function typeAnimation() {
    Typed.new("#writing-text", {
      strings: [
        "am a Full-Stack Web Developer.",
        "love everything about code.",
        "also teach programming to people.",
        "solve problems.",
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 1,
      contentType: "text",
      callback: function () {
        $("#writing-text").css({
          color: "#fff",
          "background-color": "#C8412B",
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    displayWordCloud: displayWordCloud,
    typeAnimation: typeAnimation,
  };
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
document.addEventListener("DOMContentLoaded", function () {
  let smoothScrollLinks = document.querySelectorAll(".smooth-scroll");
  let headerHeight = document.querySelector("header").offsetHeight; // Assuming you have a <header> tag

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let target = document.querySelector(this.getAttribute("href"));

      if (target) {
        let topOffset = target.offsetTop - headerHeight; // Adjust the offset by the header height

        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    });
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
