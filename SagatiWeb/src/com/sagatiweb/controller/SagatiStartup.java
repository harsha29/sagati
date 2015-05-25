package com.sagatiweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SagatiStartup {

	@RequestMapping(value = "/index", method = RequestMethod.GET)
	    public String printWelcome(ModelMap model)
	    {
	        model.addAttribute("message", "STARTUP  !! ");
	       
	        return "index";
	    }

	@RequestMapping(value = "/addtagcloud", method = RequestMethod.GET)
    public String test(ModelMap model)
    {
        model.addAttribute("message", "test  !! ");
       
        return "addtagcloud";
    }

}
