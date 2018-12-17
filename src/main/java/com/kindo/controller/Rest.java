package com.kindo.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@EnableAutoConfiguration
@RequestMapping("/rest")
public class Rest
{
	@RequestMapping("/home")
	@ResponseBody
	String home()
	{
		return "This is home url!";
	}
}
