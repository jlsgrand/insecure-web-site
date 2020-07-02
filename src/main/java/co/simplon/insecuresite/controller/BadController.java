package co.simplon.insecuresite.controller;

import co.simplon.insecuresite.model.MovieTitle;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class BadController {

    private JdbcTemplate jdbcTemplate;

    public BadController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping
    public void postMovieTitle(@RequestBody MovieTitle data) {
        jdbcTemplate.execute("INSERT INTO movie_title (name) values ('" + data.getName() + "');");
    }

    @GetMapping()
    public List<MovieTitle> getMovieTitles() {
        List<String> movieTitleStrings = jdbcTemplate.queryForList("SELECT * FROM movie_title", String.class);
        List<MovieTitle> movieTitles = new ArrayList<>();
        for (String movieTitle : movieTitleStrings) {
            movieTitles.add(new MovieTitle(movieTitle));
        }
        return movieTitles;
    }

}
