package hello;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloRestController {

    @RequestMapping("/")
    public String home() {
        return System.getenv("HOSTNAME") + " says hello KUBO!";
    }

    @RequestMapping("/test")
    public String test() {
        return "Test";
    }


}
