{
    if ($0 == "  }") {
        print "  },\n  {";
        printf "    \"name\": \"%s\",\n", name;
        printf "    \"colophon\": \"%s\",\n", colophon;
        printf "    \"url\": \"%s\"\n", url;
        print $0;
    } else {
        print $0;
    }
}
