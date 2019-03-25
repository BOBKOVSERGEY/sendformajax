<?php

function message($title, $text, $status)
{
  echo json_encode([
    'title' => $title,
    'text' => $text,
    'status' => $status
  ]);
}

function location($url)
{
  echo json_encode([
    'url' => $url,
  ]);
}