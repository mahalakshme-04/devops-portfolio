output "elb_dns" {
  value = aws_elb.web_lb.dns_name
}
